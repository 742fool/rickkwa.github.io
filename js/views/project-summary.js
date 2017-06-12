var app = app || {};

app.ProjectSummaryView = Backbone.View.extend({
	template: _.template($("#project-summary-template").html()),

	initialize: function() {
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});