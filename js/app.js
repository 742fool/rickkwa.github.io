var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
		"" : "home",
		"project/:slug" : "project"
	},

	initialize: function() {
	},

	home: function() {
		var self = this;
		self.loadProjects(function(projectsColl) {
			self.loadContactInformation(function(contactInfoColl) {
				self.loadSkills(function(skillsColl) {
					if (!self.homeView)
						self.homeView = new app.HomeView({ 
							el: $("#content"), 
							projects: projectsColl, 
							contactInfos: contactInfoColl,
							skills: skillsColl
						});
					self.homeView.render();
				});
			});
		});
	},

	project: function(slug) {
		var projectModel = this.projects.get(slug);
		if (projectModel) {

		}
		else {

		}
	},

	loadProjects: function(callback) {
		// Load/Create the collection, then fetch
		if (!this.projects)
			this.projects = new app.Projects();
		this.projects.fetch({ success: callback });
	},

	loadContactInformation: function(callback) {
		if (!this.contactInfos)
			this.contactInfos = new app.ContactInfos();
		this.contactInfos.fetch({ success: callback });
	},

	loadSkills: function(callback) {
		if (!this.skills)
			this.skills = new app.Skills();
		this.skills.fetch({ success: callback });
	}
});

app.router = new app.Router();
Backbone.history.start();