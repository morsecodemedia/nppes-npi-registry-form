window.ns=window.ns||function(ns){var n=ns.split('.'),p=window,c;for(var i=0;i<n.length;i+=1){c=n[i];p[c]=p[c]||{modify:function(o){for(var i in o){if(o.hasOwnProperty(i)){this[i]=o[i]}}}};p=p[c]}return p}

ns('com.morsecodemedia.events').modify({
	DEBUG: false,

	init : function() {
		this.log('Initialized');
		this.bindButtons();
	},

	/* Package log method
	*/
	log : function () {
		if (this.DEBUG)
			console.log (
				"[com.morsecodemedia.events]",
				Array.prototype.join.call(arguments, " ") );
	},

	bindButtons : function(){

		$('.isi_seemore, .isi-jump-link').on('click', function (e) {
			var distance = $('#isi').offset().top;
			$('html,body').scrollTo(distance, 500, function(){
				setTimeout(function(){
					$('html,body').scrollTo(distance, 500);
				},100)
			});
			e.preventDefault();
		});

		$('.back_to_top').on('click', function (e) {
			var distance = $('#top').offset().top;
			$('html,body').scrollTo(distance, 500, function(){
				setTimeout(function(){
					$('html,body').scrollTo(distance, 500);
				},100)
			});
			e.preventDefault();
		});

		$('body').on('track-section', $.proxy(function onTrackSection ( event, sectionID ) {
			var trackObj		 = {};
			trackObj.category	 = 'section';
			trackObj.action		 = 'scroll';
			trackObj.label		 = sectionID;
			com.morsecodemedia.utils.trackEvent(trackObj);
		}, this));

		$('body').on('click', '.track-click', $.proxy(function onTrackClick (e) {

			e.preventDefault();
			var extLink			 = $(e.target);

			this.log('(onTrackClick) link:', extLink);

			var trackObj		 = {};
			trackObj.category	 = extLink.data('ga-category');
			trackObj.action		 = extLink.data('ga-action');
			trackObj.label		 = extLink.data('ga-label');
			trackObj.value		 = extLink.data('ga-value');
			trackObj.href		 = extLink.attr('href');
			trackObj.target		 = extLink.attr('target');

			com.morsecodemedia.utils.trackEvent(trackObj);
		}, this));

		$('#exit-modal').on('show.bs.modal', function(event) {
			// Link that triggered the modal
			var extLink			= $(event.relatedTarget);

			// Extract info from data-*
			var trackObj		 = {};
			trackObj.category	 = extLink.data('ga-category');
			trackObj.action		 = extLink.data('ga-action');
			trackObj.label		 = extLink.data('ga-label');
			trackObj.value		 = extLink.data('ga-value');
			trackObj.href		 = extLink.attr('href');
			trackObj.target		 = '_blank';

			// Update modal content
			var modal			= $(this);

			modal.find('.external_link_confirm').on("click", function(e) {
				e.preventDefault();
				// Track the event and navigate in one
				com.morsecodemedia.utils.trackEvent(trackObj);
				// Close modal on site
				modal.modal('hide');
			});

		});

	} //bindButtons

});

