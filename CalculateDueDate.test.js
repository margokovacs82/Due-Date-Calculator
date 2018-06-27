const test = require('tape');
const calculateDueDate = require('./CalculateDueDate');

test('due date on the same day', t => {
  expected = 'Tue, 26 Jun 2018 16:49:40 GMT';
  submitDate = 1530024580143;
  turnAroundTime ='2h';
  t.equal(calculateDueDate(submitDate, turnAroundTime), expected);
  t.end();
});

test('due date after a weekend', t => {
  expected = 'Mon, 02 Jul 2018 11:39:48 GMT';
  submitDate = 1530092388026;
  turnAroundTime ='26h';
  t.equal(calculateDueDate(submitDate, turnAroundTime), expected);
  t.end();
});
