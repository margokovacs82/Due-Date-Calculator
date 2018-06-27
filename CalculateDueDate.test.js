const test = require('tape');
const calculateDueDate = require('./CalculateDueDate');

test('due date on the same day', t => {
  expected = 'Tue, 26 Jun 2018 16:49:40 GMT';
  submitDate =1530024580143;
  turnAroundTime ='2h';
  t.equal(calculateDueDate(submitDate, turnAroundTime), expected);
  t.end();
});

