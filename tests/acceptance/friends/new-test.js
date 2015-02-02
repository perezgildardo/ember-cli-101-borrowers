import Ember from 'ember';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: FriendsNew', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('Creating a new friend', function() {
  visit('/');
  click('a[href="/friends/new"]');

  andThen(function() {
    equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Cash');
  fillIn('input[placeholder="email"]', 'j@cash.com');
  fillIn('input[placeholder="twitter"]', 'jcash');
  click('input[value="Save"]');

  andThen(function() {
    equal(
      currentRouteName(),
      'friends.show.index',
      'Redirects to friends.show after create'
    )
  });
});

test('Clicking save without filling fields', function() {
  visit('/friends/new');
  click('input[value="Save"]');

  andThen(function() {
    equal(
      currentRoutName(),
      'friends.new',
      'Stays on new page'
    );
    equal(
      find("h2:contains(You have to fill all the fields)").length,
      1,
      "Displays error message"
    );
  }):
});
