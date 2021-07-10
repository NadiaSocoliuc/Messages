let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily',
    'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.',
    '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length);


secretMessage.pop(); // deleted the last string of the array using the pop method

secretMessage.push('to', 'Program'); // added new strings at the end of the array using the push method

secretMessage[7] = 'right'; // accessed the index of 'easily' and replaced it by changing to 'right'

secretMessage.shift(); // Used the shift method to remove the first string of the array.

secretMessage.unshift('Programming'); // Used the unshift method to add the string 'Programming' to the beginning of the array

secretMessage.splice(6, 5, 'know'); // Used the splice method to remove the strings get, right, the, first, time,, and replace them with the single string know,. 6 - is the index of "get" and 5 is the number of replaced strings

console.log(secretMessage.join(' '));