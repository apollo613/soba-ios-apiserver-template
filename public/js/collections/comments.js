var App = App || {};
App.Collection = App.Collection || {};

App.Collection.Comments = Backbone.Collection.extend({
  model: App.Model.Comment,
  url: function() {
    return this.post.url() + '/comments';
  },
  initialize: function(models, options) {
    this.post = options.post;
    console.log(options.post);
  }
});