describe('scrabbleScore', function() {

  it('returns a score of 1 for the letter "A"', function() {
    scrabbleScore("A").should.equal(1);
  });

  it('returns a score of 2 for the word "AT"', function() {
    scrabbleScore("AT").should.equal(2);
  });
  it('returns a score of 6 for the word "POUR', function() {
    scrabbleScore("POUR").should.equal(6);
  });
  

});

