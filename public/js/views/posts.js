var App = App || {};
App.View = App.View || {};

App.View.Posts = Backbone.View.extend({
  tagName: 'div',
  template: _.template( $('#posts-template').html() ),

  events: {
    'click a[href="#newpost"]': 'createNewPost'
  },

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'add', this.addOne);
  },

  render: function() {
    this.$el.html( this.template() );
    this.$posts = this.$el.find('#posts');
    return this;
  },

  addAll: function() {
    this.$posts.empty();
    this.collection.each(this.addOne, this);
  },

  addOne: function(post) {
    var postView = new App.View.Post({model: post});
    this.$posts.append( postView.render().el );
  },

  createNewPost: function(event) {
    this.newPostView = new App.View.NewPost();
    this.newPostView.render().$el.modal(); // .modal() is bootstrap
    this.listenTo(this.newPostView, 'dialog:save', this.saveNewPost);
    return false;
  },

  saveNewPost: function(event) {
    this.collection.create(this.newPostView.postAttributes);
    // really we should have some error handling here

    // dismiss the dialog
    this.stopListening(this.newPostView); // stop listening to dialog:save
    this.newPostView.$el.modal('hide'); // from bootstrap
    delete this.newPostView; // delete reference
  }
});