// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges (string) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou";
  var newString = "";
  
  //loop through every letter in the string
for (var i = 0; i < string.length; i++) {
  var character = string[i];
  var lowerChar = string[i].toLowerCase();
  
  //if z, then append capital A to the newString variable
  if (character.toLowerCase() === "z") {
    newString += "A";
  }