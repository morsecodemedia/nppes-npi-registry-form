window.ns=window.ns||function(ns){var n=ns.split('.'),p=window,c;for(var i=0;i<n.length;i+=1){c=n[i];p[c]=p[c]||{modify:function(o){for(var i in o){if(o.hasOwnProperty(i)){this[i]=o[i]}}}};p=p[c]}return p}

ns('com.gsw.isi').modify({
	VERSION: "0.0.1",
	DEBUG: false,
	_supportPageOffset: 0,
	_isCSS1Compat: false,

	/* Package log method
	*/
	log : function () {
		if (this.DEBUG)
			console.log (
				"[com.gsw.isi]",
				Array.prototype.join.call(arguments, " ") );
	},

	init : function () {
		this.log('Initialized');
		this._supportPageOffset = window.pageXOffset !== undefined;
		this._isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

		function Debounce(func, wait, immediate, extra) {
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

		function removeClass (el, className) {
			if (el.classList)
				el.classList.remove(className);
			else
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}

		function addClass (el, className) {
			if (el.classList)
				el.classList.add(className);
			else
				el.className += ' ' + className;
		}

		function hasClass (el, className) {
			if (el.classList)
				el.classList.contains(className);
			else
				new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}

		function hasScrolledISI() {
			var isi = document.getElementById("isi");
			var y = com.gsw.isi._supportPageOffset ? window.pageYOffset : com.gsw.isi._isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
			var bodyRect = document.body.getBoundingClientRect();
			var elemRect = isi.getBoundingClientRect();
			var offset	 = elemRect.top - bodyRect.top;

			if ( y > ( offset - (h * 0.8) ) ) {
				removeClass(isi, 'isi-fixed');
			} else {
				addClass(isi, 'isi-fixed');
			}
		}

		var debounceScroll = Debounce(hasScrolledISI, 33, true, true);
		window.addEventListener("scroll", debounceScroll, false);
		hasScrolledISI();

		function scrollTo(element, to, duration) {
			if (duration <= 0) return;
			var difference = to - element.scrollTop;
			var perTick = difference / duration * 10;

			setTimeout(function() {
				element.scrollTop = element.scrollTop + perTick;
				if (element.scrollTop === to) return;
				scrollTo(element, to, duration - 10);
			}, 10);
		}

		// Handler for see more links
		document.addEventListener( 'click', function ( e ) {
			if ( e.target.className.indexOf('isi-seemore') !== -1) {
				var isi = document.getElementById("isi");
				var elemRect = isi.getBoundingClientRect();
				scrollTo(document.body, elemRect.top, 500);
				e.preventDefault();
			}
		}, false );
	}

});

/* vi: set shiftwidth=4 tabstop=4 expandtab: */
