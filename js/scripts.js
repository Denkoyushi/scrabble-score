var points = {1:["A","E","I","O","U","L","N","R","S","T"]};
points[2] = ["D","G"];
points[3] = ["B","C","M","P"];
points[4] = ["F","H","V","W","Y"];
points[5] = ["K"];
points[8] = ["J","X"];
points[10] = ["Q","Z"];

var scrabbleScore = function(word) {
  var splitWord = word.toUpperCase().split('');
  var finalScore = 0;

for (var i = 0; i < splitWord.length; i++) {
    var letter = splitWord[i];
    for (var j = 0; j < 10; j++) {
      if (letter === points[1][j]) {
        finalScore += 1;
      } else if (letter === points[2][j]) {
        finalScore += 2;
      } else if (letter === points[3][j]) {
        finalScore += 3;
      } else if (letter === points[4][j]) {
        finalScore += 4;
      } else if (letter === points[5][j]) {
        finalScore += 5;
      } else if (letter === points[8][j]) {
        finalScore += 8;
      } else if (letter === points[10][j]) {
        finalScore += 10;
      }
    }
  }
  return finalScore;
};

// Code below is before refactoring.

// var scrabbleScore = function(word) {
//   var finalScore = 0;
//   var onePointArray = ["A","E","I","O","U","L","N","R","S","T"];
//   var twoPointArray = ["D","G"];
//   var threePointArray = ["B","C","M","P"];
//   var fourPointArray = ["F","H","V","W","Y"];
//   var splitWord = word.toUpperCase().split('');

//   for (var i = 0; i < splitWord.length; i++) {
//     var letter = splitWord[i];
//     for (var j = 0; j < onePointArray.length; j++) {
//       if (letter === onePointArray[j]) {
//         finalScore += 1;
//       }
//     }
//     for (var k = 0; k < twoPointArray.length; k++) {
//       if (letter === twoPointArray[k]) {
//         finalScore += 2;
//       } 
//     }
//     for (var l = 0; l < threePointArray.length; l++) {
//       if (letter === threePointArray[l]) {
//         finalScore += 3;
//       }
//     }
//     for (var m = 0; m < fourPointArray.length; m++) {
//       if (letter === fourPointArray[m]) {
//         finalScore += 4;
//       }
//     } 
//     if (letter === "K") {
//       finalScore += 5;
//     } else if (letter === "J" || letter === "X") {
//       finalScore += 8;
//     } else if (letter === "Q" || letter === "Z") {
//       finalScore += 10;
//     }
//   }
//   return finalScore;
// };

$(document).ready(function(){
  $("#scrabbleForm").submit(function(event){
    var word = $("#word").val();

    $(".result").prepend((word).toUpperCase() + " = " + scrabbleScore(word) + " points" + "<br>");


  event.preventDefault();
  });
});

