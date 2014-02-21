var scrabbleScore = function(word) {
  var finalScore = 0;
  var onePointArray = ["A","E","I","O","U","L","N","R","S","T"];
  var twoPointArray = ["D","G"];
  var threePointArray = ["B","C","M","P"];
  var fourPointArray = ["F","H","V","W","Y"];
  var splitWord = word.toUpperCase().split('');
  
  for (var i = 0; i < splitWord.length; i++) {
    var letter = splitWord[i];
    for (var j = 0; j < onePointArray.length; j++) {
      if (letter === onePointArray[j]) {
        finalScore += 1;
      }
    }
    for (var k = 0; k < twoPointArray.length; k++) {
      if (letter === twoPointArray[k]) {
        finalScore += 2;
      } 
    }
    for (var l = 0; l < threePointArray.length; l++) {
      if (letter === threePointArray[l]) {
        finalScore += 3;
      }
    }
    for (var m = 0; m < fourPointArray.length; m++) {
      if (letter === fourPointArray[m]) {
        finalScore += 4;
      }
    }
    if (letter === "K") {
      finalScore += 5;
    }
    if (letter === "J" || letter === "X") {
      finalScore += 8;
    }
    if (letter === "Q" || letter === "Z") {
      finalScore += 10;
    }
  }
  return finalScore;
};
