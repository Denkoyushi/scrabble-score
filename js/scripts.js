var scrabbleScore = function(word) {
  var finalScore = 0;
  var onePointArray = ["A","E","I","O","U","L","N","R","S","T"];
  var threePointArray = ["B","C","M","P"];
  var splitWord = word.toUpperCase().split('');
  
  for (var i = 0; i < splitWord.length; i++) {
    var letter = splitWord[i];
    for (var j = 0; j < onePointArray.length; j++) {
      if (letter === onePointArray[j]) {
        finalScore += 1;
      }
    }
    for (var k = 0; k < threePointArray.length; k++) {
      if (letter === threePointArray[k]) {
        finalScore += 3;
      }
    } 
  }
  return finalScore;
};
