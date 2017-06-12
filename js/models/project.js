var app = app || {};

app.Project = Backbone.Model.extend({
	idAttribute: "slug",

	defaults: {
		slug: "", 			// url slug. Should be unique id
		name: "", 			// name of the project
		short_desc: "", 	// short description to show on the projects list
		desc: "", 			// full description to show on the projects dedicated page
		thumbnail: null, 	// link to thumnail picture. Should be a square picture
		pictures: [], 		// list of links to pictures demoing the project 
		tags: [], 			// list of technologies used
		source: null, 		// link to source code
		demo: null 			// link to the demo
	},

	initialize: function() {
		this.get('tags').sort();
	}
});