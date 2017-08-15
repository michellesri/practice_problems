// check if a string is a palindrome

function PalindromeTwo(str) {
  var strFor = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  var strRev =  str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase();
  return strFor === strRev;
}
