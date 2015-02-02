import { formatDate } from '../../../utils/date-helpers';

module('Utils: formatDate');

test('formats a date object', function () {
  var date = new Date("2014/11/03");
  var result = formatDate( date, "ddd MMM DD YYYY" );

  equal(result, 'Mon Nov 03 2014', 'returns a readable string');
});
