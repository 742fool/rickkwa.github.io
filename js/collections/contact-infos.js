var app = app || {};

app.ContactInfos = Backbone.Collection.extend({
	model: app.ContactInfo,
	url: "resources/contact-info.json"
});