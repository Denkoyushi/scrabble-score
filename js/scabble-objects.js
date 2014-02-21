var points = {1:["A","E","I","O","U","L","N","R","S","T"]};
points[2] = ["D","G"];
points[3] = ["B","C","M","P"];
points[4] = ["F","H","V","W","Y"];
points[5] = ["K"];
points[8] = ["J","X"];
points[10] = ["Q","Z"];

var splitWord = word.toUpperCase().split('');

for (var i = 0; i < splitWord.length; i++) {
    var letter = splitWord[i];
    for (var j = 0; j < 10; j++) {
      if (letter === points[1][j]) {
        finalScore += 1;
      }
    }
