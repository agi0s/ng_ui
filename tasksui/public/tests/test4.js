describe("4. Palindrome", function() {
  
  let string1 = "eeeeeeeeeeeyyyyyyyyyyeeeeeeeeeee",
	  string2 = "edit secret looks rat madam tar skool terces tide", 
	  string3 = 1234554321,
	  string4 = 1234437,

	  expected1 = "eeeeeeeeeeeyyyyyyyyyyeeeeeeeeeee",
	  expected2 = "edit secret looks rat madam tar skool terces tide",
	  expected3 = "1234554321",
	  expected4 = "3443";


  it(`Находит палиндром из строки/числа ${string1}`, function() {
    assert.deepEqual(Palindrome(string1), expected1);
  });

  it(`Находит палиндром из строки ${string2}`, function() {
    assert.deepEqual(Palindrome(string2), expected2);
  });

  it(`Находит палиндром из числа ${string3}`, function() {
    assert.deepEqual(Palindrome(string3), expected3);
  });

  it(`Находит палиндром из числа ${string4}`, function() {
    assert.deepEqual(Palindrome(string4), expected4);
  });
});

