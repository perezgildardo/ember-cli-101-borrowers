import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('article', 'Article', {
  needs: ['model:friend']
});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});
