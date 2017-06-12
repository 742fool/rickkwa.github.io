var app = app || {};

app.utils = {
	destroyView: function(view) {
		if (view) {
			// http://stackoverflow.com/a/11534056/2079781
			view.undelegateEvents();
			view.$el.removeData().unbind();
			view.remove();
			Backbone.View.prototype.remove.call(view);
		}
	},

	getAge: function() {
		return new Date(Date.now() - new Date("June 24, 1993")).getUTCFullYear() - 1970;
	},

	inViewport: function(el, customOffset={}) {
		// http://stackoverflow.com/a/7557433/2079781
		// Return true if the DOM element el is in the viewport

		var defaultOffset = {
			top: 0, left: 0, bottom: 0, right: 0 
		};
		var offset = $.extend(defaultOffset, customOffset);

		if (typeof jQuery === "function" && el instanceof jQuery) {
			el = el[0];
		}
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 + offset.top &&
			rect.left >= 0 + offset.left &&
			rect.bottom <= $(window).height() + offset.bottom &&
			rect.right <= $(window).width() + offset.right
		);
	},

	animateIn: function() {
		// $(".animate-in.invis").each(function() {
		// 	if (app.utils.inViewport(this, { bottom: 120 }))
		// 		$(this).removeClass("invis");
		// });
		$(".animate-in").each(function() {
			if (app.utils.inViewport(this, { bottom: 120 }))
				$(this).removeClass("invis");
			else
				$(this).addClass("invis");
		});
	},

	bindAnimateIn: function() {
		$(window).off("scroll", this.animateIn); // Ensure this handler isn't bound twice
		$(window).on("scroll", this.animateIn);
		this.animateIn();
	}
};