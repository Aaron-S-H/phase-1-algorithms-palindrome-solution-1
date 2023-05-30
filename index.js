function isPalindrome(word) {
  const reversedWord = wordReverse(word);
  return word === reversedWord;
}
function wordReverse(word) {
  return word.split("").reverse().join("");
}
isPalindrome("mom");
isPalindrome("racecar");
 


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
