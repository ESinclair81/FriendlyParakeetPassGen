// Assignment code here

//Array of lowercase character choices for password
var lowercaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',

];

//Array of uppercase character choices for password
var uppercaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',

];

//Array of special character choices for password
var specialCharacters = [

  '~',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '+',
  '=',
  '-',
  '`',
  '/',
  '\\',
  ';',
  ';',
  '"',
  '<',
  '>',
  ',',
  '.',
  '{',
  '}',
  '|',

];

//Array of Numbers for password 
var numberCharacters = [ '0','1','2','3','4','5','6','7','8','9',];

//Function for prompting user to click for options
function getPasswordChoices() {

//Variable to store the password length once entered
var length = parseInt(
  prompt('Please select the number of characaters you would like in your password (8-128)?')

  );

//Making sure password is minimum 8 characters
if (length < 8 ){
  alert('OOPS! Password length must be 8 characters');
  return;

}

//Checking that password length is a number 
if (isNaN(length) === true) {
  alert('HMMM..Password length must be a number!');
  return;
}


//Checking that password is not more than 128 characters
if (length > 129) {
  alert('WHOA! Password length must be less than 129 characters');
  return;

}

//Variable to store special character info
var withSpecialCharacters = confirm(
  'Click here to include special characters in your password');
  return;
}

//Variable to store numerical character info
var withNumericalCharacters = confirm(
  'Click here to include numbers in your password'
),

//Variable to store lower case character info
var withLowerCharacters = confirm(
  'Click here to include lower case letters in your password'
),

// Variable to store upper case character info
var withUpperCharacters = confirm(
  'Click here to include capital (upper casee) letters in your password'
);

//Checking that user does not input any acceptable characters 
if (
  withLowerCharacters === false &&
  withNumericalCharacters === false &&
  withUpperCharacters === false &&
  withSpecialCharacters === false
) {
  alert('Please choose a valid character type');
  return;
}

//Creating JSON object to store user input
var passwordChoices = {
  length: length,
  withLowerCharacters: withLowerCharacters,
  withNumericalCharacters: withNumericalCharacters,
  withUpperCharacters: withUpperCharacters,
  withSpecialCharacters: withSpecialCharacters,
};

return passwordChoices;
}

//Function to get random element from the array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
