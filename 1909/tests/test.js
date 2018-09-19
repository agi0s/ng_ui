describe("1. drawChessboard", function() {
  
  let expected6x4 = `* * * * * * 
 * * * * * * 
* * * * * * 
 * * * * * * 
`;

  it("Рисует доску в 4 строки, на 6 символов *", function() {
    assert.equal(drawChessboard(6, 4, "*"), expected6x4);
  });
});

