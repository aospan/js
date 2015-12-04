jest.dontMock('../min');

describe('min', function() {
  it('find minimum in 1 or 2. correct result: 1', function() {
    var min = require('../min');
    expect(min(1, 2)).toBe(1);
  });
});
