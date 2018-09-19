describe("3. sortTrigons", function() {
  
  let triangles = [{vertices: 'ABC', a: 10, b: 20, c: 22.36}, {vertices: 'DEF', d: 5, e: 5, f: 5},{vertices: 'GHI',g: 15,h: 25,i: 20},{vertices: 'KLM',k: 41,l: 51,m: 40}],
  	  expected = ["KLM", "GHI", "ABC", "DEF"];
  it("Сортирует треугольники от большего к меньшему по площади, возвращает их имена", function() {
    assert.deepEqual(sortTrigons(triangles), expected);
  });
});

