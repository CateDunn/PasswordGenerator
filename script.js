console.log("testing")

var generateBtn = document.getElementById("generate");


function writePassword(){
  /*choosing the length of the password. If you choose outside the allotted amount of characters, 
  it will keep asking until you choose a number within the allotted amount of characters*/
do {
  var length = prompt("Choose a number for the length of your password between 8 and 128");
} while (length < 8 || length > 128 );
console.log(length);
//choosing to include uppercase letters, will continue asking until at least one variable is chosen
do {
    var upperCase = confirm("Would you like to include uppercase letters");  
    var lowerCase = confirm("Would you like to include lowercase letters");
    var number = confirm("Would you like to include numbers");
    var symbols = confirm("Would you like to include symbols");
  } while ( upperCase !== true && lowerCase !== true && number !== true && symbols !== true);
    console.log(upperCase);
    console.log(lowerCase);
    console.log(number);
    console.log(symbols);

    var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numberArray = [0,1,2,3,4,5,6,7,8,9];
    var symbolsArray = ['!','@','#','%','^','&','*','?'];
    var completeArray = [];
    let password = '';

    if (upperCase){ 
      completeArray = completeArray.concat(upperCaseLetters);
      console.log(completeArray)
    };

    if (lowerCase){
      completeArray = completeArray.concat(lowerCaseLetters);
      console.log(completeArray)
    };

    if (number) {
      completeArray = completeArray.concat(numberArray);
      console.log(completeArray)
    };

    if (symbols) {
      completeArray = completeArray.concat(symbolsArray);
      console.log(completeArray)
    };


  for (let i = 0; i < length; i++) {
    var a = Math.floor(Math.random() * completeArray.length);
    password += completeArray[a];
    
    console.log(i)
    console.log(a)

  };

  document.getElementById("password").value = password;

  console.log(completeArray.length);


};

generateBtn.addEventListener("click", writePassword); 




// look at Char Codes look at .split functions


/*generate password
 
keep grabbing a random element from each array on a loop until the amount of characters = length

 Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */

