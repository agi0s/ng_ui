describe("2. canWrap", function() {
  
  let triangle = {a: 15, b: 25},
  	  triangle2 = {c: 10, d: 19},
  	  triangle3 = {a: 15.1253, b: 25.3563},
  	  triangle4 = {c: 10.2345, d: 19.1234};

  it(`Треугольник ${triangle.a} x ${triangle.b} может вместить ${triangle2.c} x ${triangle2.d}`, function() {
    assert.equal(canWrap(triangle, triangle2), 1);
  });

  it(`Треугольник ${triangle3.a} х ${triangle3.b} может вместить ${triangle4.c} x ${triangle4.d}`, function() {
    assert.equal(canWrap(triangle3, triangle4), 1);
  });
});
