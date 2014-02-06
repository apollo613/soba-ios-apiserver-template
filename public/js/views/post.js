var App = App || {};
App.View = App.View || {};

App.View.Post = Backbone.View.extend({
  tagName: 'div',
  className: 'post red',
  template: _.template( $('#post-template').html() ),

  events: {
    'click a[href="#comments"]': 'showComments',
    'click a[href="#delete"]': 'deletePost'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove); 
    // autoremove on destroy. see page 89 of developing backbone applications
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this; 
  },

  showComments: function() {
    // show the comments. load up a collection, set this.model on it,
    // create a new view for the comments list, attach the collection,
    // and render it
  },

  deletePost: function() {
    this.model.destroy();
    return false;
    // and check for errors
  }
});