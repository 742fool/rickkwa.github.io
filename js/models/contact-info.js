var app = app || {};

app.ContactInfo = Backbone.Model.extend({
	defaults: {
		text: null,
		link: null,
		fa_icon: null
	},

	initialize: function() {
	}
});