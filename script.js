console.log("testing")


/*choosing the length of the password. If you choose outside the allotted amount of characters, 
it will keep asking until you choose a number within the allotted amount of characters*/
function myFunction(){
do {
  var length = prompt("Choose a number for the length of your password between 8 and 128");
} while (length < 8 || length > 128 );
console.log(length);
//choosing to include uppercase letters, will continue asking until at least one variable is chosen
do {
    var upperCase = confirm("Would you like to include uppercase letters (type T or F)");  
    var lowerCase = confirm("Would you like to include lowercase letters (type T or F)");
    var number = confirm("Would you like to include numbers (type T or F)");
    var symbols = confirm("Would you like to include symbols (type T or F)");
  } while ( upperCase !== true && lowerCase !== true && number !== true && symbols !== true);
    console.log(upperCase);
    console.log(lowerCase);
    console.log(number);
    console.log(symbols);
};


//generate password

/* Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */

