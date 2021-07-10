let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++){
    //console.log(i);{
    for (let j = 0; j < vowels.length; j++) {
          //console.log(j); {
            if (input[i] === vowels[j]) {

              if (input[i] === 'e') {
                resultArray.push('ee');
              } else if (input[i] === 'u') {
                resultArray.push('uu');
              }
              else {
                resultArray.push(input[i]);
              }
            }
      }
  }
  console.log(resultArray.join('').toUpperCase());

  // 1 for - Created a loop to iterate through each letter of the input variable text (Looping through Arrays)
  // 2 for - Created a nested for loop inside of the 1st for loop wich iterate through the vowels array each time the outer loop runs
  // 1 if - wrote a code block that compares the input letter (input[i]) to every letter in the vowels array (vowels[j]).
  // 2 and 3 if - these statemets check if each letter in the input string is equal to 'e' and 'u'. 
  // Used the push() Method (.push() input[i] to the resultArray).
  // used the join() Method to create and returns a new string by concatenating all of the elements, separated by comas, in an array.
  // used the toUpperCase() Method to return the calling string value converted to uppercase.

/*input = 'Hi, Human';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++){
    //console.log(i);{
    for (let j = 0; j < vowels.length; j++) {
          //console.log(j); {
            if (input[i] === vowels[j]) {

              if (input[i] === 'e') {
                resultArray.push('ee');
              } else if (input[i] === 'u') {
                resultArray.push('uu');
              }
              else {
                resultArray.push(input[i]);
              }
            }
      }
  }
  console.log(resultArray.join('').toUpperCase());

input = 'a whale of a deal!';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++){
    //console.log(i);{
    for (let j = 0; j < vowels.length; j++) {
          //console.log(j); {
            if (input[i] === vowels[j]) {

              if (input[i] === 'e') {
                resultArray.push('ee');
              } else if (input[i] === 'u') {
                resultArray.push('uu');
              }
              else {
                resultArray.push(input[i]);
              }
            }
      }
  }
  console.log(resultArray.join('').toUpperCase());*/