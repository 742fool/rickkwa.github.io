var app = app || {};

app.Skill = Backbone.Model.extend({
	defaults: {
		// section_name : "",
		// section_value : "",
		type: "",
		skills : []
	},

	parse: function(response, options) {
		console.log(response, options);
		return { type: "123", skills: ["asd"] };
	}
});