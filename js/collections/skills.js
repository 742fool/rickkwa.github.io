var app = app || {};

app.Skills = Backbone.Collection.extend({
	model: app.Skill,
	url: "resources/skills.json",

	parse: function(response) {
		console.log(response);
		return response.skills;
	}
});