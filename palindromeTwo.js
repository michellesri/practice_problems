function PalindromeTwo(str) {
  var strFor = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  var strRev =  str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase();
  
