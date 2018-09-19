describe("7. fibonacci", function() {
  
  let expected = "4,5,6,7,8",
  	  context = {
		min : 3,
		max : 10 },
	  result = [8, 13, 21, 34, 55];



  it(`Вовзращает числа фибоначчи от ${context.min} до ${context.max} `, function() {
    assert.deepEqual(fibonacci(context), result);
  });
});

