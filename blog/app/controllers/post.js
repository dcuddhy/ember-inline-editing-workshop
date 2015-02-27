import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editPost: function (post) {
      this.set('isEditing', true);
    },
    savePost: function (post) {
      var body = post.get('body'),
          title = post.get('title');

      if (body && title) {
        this.set('isEditing', false);
        post.save();
      }
    }
  }
});
