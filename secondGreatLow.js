// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

function SecondGreatLow(arr) {
  var array = arr.sort(function(a,b) {return a-b});

  //loop through array to remove duplicate values
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
