var App = App || {};
App.View = App.View || {};

// Extremely light weight view that only gathers new post attributes
// and maybe validates them. Up to parent view to deal with the input

App.View.NewPost = Backbone.View.extend({
  tagName: 'div',
  className: 'modal fade',
  id: 'new-form-modal',
  template: _.template( $('#new-post-template').html() ),

  events: {
    'click #new-post-save': 'savePost'
  },

  initialize: function() {
    
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  savePost: function(event) {
    // might validate the input here

    this.postAttributes = {
      title: this.$el.find('[name="input-title"]').val(),
      author: this.$el.find('[name="input-author"]').val(),
      body: this.$el.find('[name="text-body"]').val()
    };

    this.trigger('dialog:save');
  }


});