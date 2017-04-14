window.ns=window.ns||function(ns){var n=ns.split('.'),p=window,c;for(var i=0;i<n.length;i+=1){c=n[i];p[c]=p[c]||{modify:function(o){for(var i in o){if(o.hasOwnProperty(i)){this[i]=o[i]}}}};p=p[c]}return p}

ns('com.gsw.sectionTracking').modify({
	VERSION: "0.0.1",
	DEBUG: false,
	_supportPageOffset: 0,
	_isCSS1Compat: false,
	_sections: [],

	/* Package log method
	*/
	log : function () {
		if (this.DEBUG)
			console.log (
				"[com.gsw.sectionTracking]",
				Array.prototype.join.call(arguments, " ") );
	},

	init : function() {
		this.log('Initialized');
		this._supportPageOffset = window.pageXOffset !== undefined;
		this._isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
		var sectionNodes = document.getElementsByClassName('track-section')
		this._sections = Array.prototype.slice.call(sectionNodes);

		function debounce(func, wait, immediate, extra) {
			var timeout, result;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate || extra) result = func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) result = func.apply(context, args);
				return result;
			};
		};

		function hasScrolledTracking() {
			var y = com.gsw.sectionTracking._supportPageOffset ? window.pageYOffset : com.gsw.sectionTracking._isCSS1Compat ? document.body.scrollTop : document.body.scrollTop;
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

			var i = com.gsw.sectionTracking._sections.length; while (i--) {
				var obj = com.gsw.sectionTracking._sections[i];
				var bodyRect = document.body.getBoundingClientRect();
				var elemRect = obj.getBoundingClientRect();
				var topOffset  = elemRect.top - bodyRect.top;
				var bottomOffset = elemRect.height + topOffset;
				var isInTopBound = (y > ( topOffset - (h*0.5) ));
				var isInBottomBound = (y < (bottomOffset - (h*0.25)));

				if ( isInTopBound && isInBottomBound) {
					if (obj.id) {
						$('body').trigger('track-section', [ obj.id ]);
						com.gsw.sectionTracking._sections.splice(i,1);
					}
				}
			}
		};

		var debounceScroll = debounce(hasScrolledTracking, 33, true, true);
		window.addEventListener("scroll", debounceScroll, false);
		hasScrolledTracking();
	}

});



/* vi: set shiftwidth=4 tabstop=4 expandtab: */
