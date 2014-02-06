var App = App || {};
App.Model = App.Model || {};

App.Model.Post = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    title: 'Untitled'
  },

  initialize: function() {
    
  }
});