// COPY THIS CODE INTO THE CONSOLE
function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  let myWord = prompt("Type in a word");
  let reversedWord = reverseWord(myWord);
  if (myWord == reversedWord){
    console.log(myWord + " is a palindrome! YAY!");
  }
  else if (myWord != reversedWord){
    console.log(myWord + " is NOT a palindrome! Try again.");
  }
// TO GET THEPROGRAM RUNNING, COPY PASTE THE JAVASCRIPT CODE INTO THE CONSOLE.


