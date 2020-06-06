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

function generatePassword() {

  var selections = "";
  var passwordLength = prompt("Choose a password length between 8-128 characters:");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be at least 8 characters but no more than 128");
    // how can I go back to passwordLength prompt?
  }

  var upperCase = confirm("Include uppercase letters in your password?");
  
  if (upperCase) {
    selections = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  var lowerCase = confirm("Include lowercase letters in your password?");

  if (lowerCase) {
    selections = "abcdefghijklmnopqrstuvwxyz"
  }

  var num = confirm("Include numbers in your password?");

  if (num) {
    selections = "0123456789"
  }

  var specialChar = confirm("Include special characters in your password?")

  if (specialChar) {
    selections = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

}


