import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'articles/item',
  queryParams: ['showReturned'],
  showReturned: true,

  filteredResults: function() {
    if (this.get('showReturned') === true) {
      return this.get('model');
    } else {
      return this.get('model').filterBy('state', 'borrowed');
    }
  }.property('showReturned'),

  actions: {
    toggleShowReturned: function() {
      this.toggleProperty('showReturned');
    }
  }
});
