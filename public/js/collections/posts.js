var App = App || {};
App.Collection = App.Collection || {};

App.Collection.Posts = Backbone.Collection.extend({
  model: App.Model.Post,
  url: '/api/posts'
});