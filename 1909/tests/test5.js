describe("5. happyTicket", function() {
  
  let allTickets = 55251,
  	  contextAll = {min: 1, max: 999999},
  	  contextRandom = {min: 102954, max: 657321};
  	  result = happyTicket(contextRandom).winner;

  it("Находит метод, возвращающий большее количество билетов", function() {
    assert.isTrue(result == simpleMethod);
  });

	  describe("5.1 simple method", function() {

	  it("Проверяет работуспособность простого метода - возвращает 55251 при {min: 1, max: 999999}", function() {
	    assert.equal(simpleMethod(contextAll), allTickets);
	  });
	  });

	  describe("5.2 complex method", function() {

	  it("Проверяет работуспособность сложного метода", function() {
	    assert.equal(complexMethod(contextAll), allTickets);
	  });
	  });
});