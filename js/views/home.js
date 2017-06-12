var app = app || {};

app.HomeView = Backbone.View.extend({
	template: _.template($("#home-template").html()),

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		this.$el.html(this.template({ 
			age: app.utils.getAge(), 
			contactInfos: this.options.contactInfos
		}));

		// Populate project summaries
		var $projectsContainer = $(".project-summary-container");
		this.options.projects.each(function(pModel) {
			let summaryView = new app.ProjectSummaryView({ model: pModel });
			$projectsContainer.append(summaryView.render().el);
		});

		// Bind scroll events to animate in
		app.utils.bindAnimateIn();

		return this;
	}
});