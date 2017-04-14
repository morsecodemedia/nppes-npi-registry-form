window.ns=window.ns||function(ns){var n=ns.split('.'),p=window,c;for(var i=0;i<n.length;i+=1){c=n[i];p[c]=p[c]||{modify:function(o){for(var i in o){if(o.hasOwnProperty(i)){this[i]=o[i]}}}};p=p[c]}return p}

ns('com.morsecodemedia.utils').modify({
	VERSION: "0.0.1",
	DEBUG: false,
	_QueryString: {},

	/* Package log method
	*/
	log : function () {
		if (this.DEBUG)
			console.log (
				"[com.morsecodemedia.utils]",
				Array.prototype.join.call(arguments, " ") );
	},

	init : function () {
		// Get all query strings upon load for easy referencing later
		this._QueryString = function () {
			var query_string = {};
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
				var pair = vars[i].split("=");
				// If first entry with this name
				if (typeof query_string[pair[0]] === "undefined") {
					query_string[pair[0]] = decodeURIComponent(pair[1]);
					// If second entry with this name
				} else if (typeof query_string[pair[0]] === "string") {
					var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
					query_string[pair[0]] = arr;
					// If third or later entry with this name
				} else {
					query_string[pair[0]].push(decodeURIComponent(pair[1]));
				}
			}
			return query_string;
		}();

		// Modify scrollTo method for jQuery
		$.fn.scrollTo = function scrollTo( target, options, callback ){
			if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
			var settings = $.extend({
				scrollTarget  : target,
				offsetTop	  : 50,
				duration	  : 500,
				easing		  : 'swing'
			}, options);
			return this.each(function(){
				var scrollPane = $(this);
				var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
				var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
				scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
					if (typeof callback == 'function') { callback.call(this); }
				});
			});
		};
	},

	getParamByName: function getParamByName(name) {
		return this._QueryString[name];
	},

	trackEvent: function(obj) {
		var trackObj = {
			'hitType' : 'event',
			'eventCategory' : obj.category.toLowerCase(),
			'eventAction' : obj.action.toLowerCase(),
			'eventLabel' : obj.label
		};

		if (typeof obj.value !== 'undefined' && obj.value !== null)
			trackObj.eventValue = obj.value;

		// Prepend with HCP or PAT to obj.id, then store in event field
		// Body contains class with patient or hcp
		var audience = ( $('body').hasClass('patient') ) ? 'pat' : 'hcp';

		// Rewrite and clean-up label with audience prefix
		var l = obj.label.toLowerCase();
		l = l.replace(/\ /g, "-");
		l = l.replace(/\//g, "-");
		trackObj.eventLabel = String(audience+ '_' + l).toLowerCase();

		// Handle event tracking on exit links
		if (obj.href) {
			// use beacon if supported
			if (navigator.sendBeacon) trackObj.transport = 'beacon';

			var hitBack = function() {
				if (obj.target) {
					var win = window.open(obj.href, obj.target);
					win.focus();
				} else {
					window.location.href = obj.href;
				}
			};

			trackObj.hitCallback = hitBack;
		}

		this.log('(trackEvent)', trackObj.eventCategory, trackObj.eventAction, trackObj.eventLabel);
		window.ga('send', trackObj);
	}
});

/* vi: set shiftwidth=4 tabstop=4 expandtab: */
