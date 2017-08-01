// Have the function CountingMinutesI(str)
// take the str parameter being passed which will
//  be two times (each properly formatted with a
//     colon and am or pm) separated by a hyphen
//      and return the total number of minutes
//       between the two times. The time will be
//        in a 12 hour clock format.
//        For example: if str is 9:00am-10:00am then
//        the output should be 60. If str is 1:00pm-11:00am
//        the output should be 1320.

function CountingMinutesI(str) {
  //split string into array of two times, separated by the dash
  var array = str.split("-");
  // ["12:30pm", "12:00am"]
  //convert into 24-hour time

  for (var i = 0; i < array.length; i++) {

    //if last two digits are "pm"
    if (array[i].slice(array[i].length - 2) === "pm") {
      //remove "pm"
      array[i] = array[i].replace("pm", "");
      //12:30pm becomes 12:30

      //if first two digits are not "12"
      if (array[i].slice(0, 2) !== "12") {
        //add 12 to the hours figure
        array[i] = (parseInt(array[i].slice(0, 2)) + 12).toString() + array[i].slice(array[i].length - 3);
        //1:30pm becomes 13:30
      }
    }
