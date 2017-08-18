// Using the JavaScript language, have the function StringScramble(str1,str2)
// take both parameters being passed and return the string true if a portion of str1
// characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw"
// and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.

function StringScramble(str1,str2) {
  var arr = [];

  for(var i = 0; i < str2.length; i++) {
    for(var j = 0; j < str1.length; j++) {
      if(str1.charAt(j) == str2.charAt(i) && arr.indexOf(j) < 0) {
        arr.push(j);
        console.log(arr);
        break;
      }
    }
  }

  return str2.length == arr.length
}

console.log(StringScramble('bla', 'bla'));
