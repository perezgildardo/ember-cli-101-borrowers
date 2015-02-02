import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    showReturned: {
      refreshModel: true
    }
  },

  model: function() {
    return this.modelFor('friends/show').get('articles');
  },

  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});
