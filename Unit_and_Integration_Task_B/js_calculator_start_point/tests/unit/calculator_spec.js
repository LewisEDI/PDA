var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });


  it('should be able to add', function () {
    calculator.previousTotal = 2
    calculator.add(3)
    const expected = 5
    assert.strictEqual(calculator.runningTotal, expected);
  });

  it('should be able to subtract', function () {
    calculator.previousTotal = 7
    calculator.subtract(4)
    const expected = 3
    assert.strictEqual(calculator.runningTotal, expected);
  });

  it('should be able to multiply', function () {
    calculator.previousTotal = 3
    calculator.multiply(5)
    const expected = 15
    assert.strictEqual(calculator.runningTotal, expected);
  });

  it('should be able to divide', function () {
    calculator.previousTotal = 21
    calculator.divide(7)
    const expected = 3
    assert.strictEqual(calculator.runningTotal, expected);
  });


  it(' should be able to concatenate multiple number button clicks', function () {
    calculator.numberClick(4);
    calculator.numberClick(5);
    const expected = 45
    assert.strictEqual(calculator.runningTotal, expected);
  });

  it('should be able to chain multiple operations together', function () {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    const expected = 6
    assert.strictEqual(calculator.runningTotal, expected);
  });

  it('should clear the running total without affecting the calculation', function () {
    calculator.numberClick(7)
    calculator.clearClick()
    const expected = 0
    assert.strictEqual(calculator.runningTotal, expected);
  });


});
