describe('scrabbleScore', function() {

  it('returns a score of 1 for the letter "A"', function() {
    scrabbleScore("A").should.equal(1);
  });

  it('returns a score of 2 for the word "AT"', function() {
    scrabbleScore("AT").should.equal(2);
  });

  it('returns a score of 6 for the word "POUR"', function() {
    scrabbleScore("POUR").should.equal(6);
  });

  it('returns a score of 5 for the word "DOG"', function() {
    scrabbleScore("DOG").should.equal(5);
  });

  it('returns a score of 9 for the word "WOW"', function() {
    scrabbleScore("WOW").should.equal(9);
  });

  it('returns a score of 16 for the word "KAYAK"', function() {
    scrabbleScore("KAYAK").should.equal(16); 
  });

  it('returns a score of 19 for the word "XEROX"', function() {
    scrabbleScore("XEROX").should.equal(19); 
  });

  it('returns a score of 13 for the word "ZERO"', function() {
    scrabbleScore("ZERO").should.equal(13); 
  });

});

