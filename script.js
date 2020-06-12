// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function that includes the password length and criteria
// Also included console.logs to see user choices
function generatePassword() {

  var selections = "";
  var passwordLength = prompt("Choose a password length between 8-128 characters:");

  // Set password length with correct parameters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be at least 8 characters but no more than 128.");
    return generatePassword();
  } else if (isNaN(passwordLength)) {
    alert("Password must be in numerical form.");
    return generatePassword();
  }

  console.log("Password length: " + passwordLength);

  // Confirms uppercase
  var upperCase = confirm("Include uppercase letters in your password?");
  
  if (upperCase) {
    selections += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  console.log("Uppercase: " + upperCase.toString())

  // Confirms lowercase
  var lowerCase = confirm("Include lowercase letters in your password?");

  if (lowerCase) {
    selections += "abcdefghijklmnopqrstuvwxyz"
  }

  console.log("Lowercase: " + lowerCase.toString())

  // Confirms numbers
  var num = confirm("Include numbers in your password?");

  if (num) {
    selections += "0123456789"
  }

  console.log("Numbers: " + num.toString())

  // Confirms special characters
  var specialChar = confirm("Include special characters in your password?")

  if (specialChar) {
    selections += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  }

  console.log("Special Characters: " + specialChar.toString())

  // Returns user to beginning if no character set selected
  if ((upperCase === false) && (lowerCase === false) && (num === false) && (specialChar === false)) {
  alert("Must include at least one character set.");
  return generatePassword();
  }

  // Math using user selected length and character sets
  var randomPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += selections.charAt(Math.floor(Math.random() * selections.length));
  }
  
  return randomPassword

}




