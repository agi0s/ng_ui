describe("6. numericalSequence", function() {
  
  let expected = "4,5,6,7,8",
  	  n = 5,
  	  m = 10;

  it(`Числовая последовательность из ${n} чисел квадрат которbIх больше ${m}`, function() {
    assert.equal(numericalSequence(n, m), expected);
  });
});

