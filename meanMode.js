// Have the function MeanMode(arr) take the array of numbers
// stored in arr and return 1 if the mode equals the mean, 0 if
// they don't equal each other (ie. [5, 3, 3, 3, 1] should return
//   1 because the mode (3) equals the mean (3)). The array will not
//    be empty, will only contain positive integers, and will not
//     contain more than one mode.

function MeanMode(arr) {
  //determine mean
  var sum = 0;

  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  var mean = sum / arr.length;

  //if mean is not integer, return 0
  if (mean % 1 !== 0) {
    return 0;
  }

  //determine mode
  var mode = 0;
  var maxDigits = 1;
