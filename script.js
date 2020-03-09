var generateBtn = document.getElementById("generate");

function writePassword(){

do {
  var length = prompt("Choose a number for the length of your password between 8 and 128");
} while (length < 8 || length > 128 );

do {
    var upperCase = confirm("Would you like to include uppercase letters");  
    var lowerCase = confirm("Would you like to include lowercase letters");
    var number = confirm("Would you like to include numbers");
    var symbols = confirm("Would you like to include symbols");
  } while ( upperCase !== true && lowerCase !== true && number !== true && symbols !== true);
    

    var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numberArray = [0,1,2,3,4,5,6,7,8,9];
    var symbolsArray = ['!','@','#','%','^','&','*','?'];
    var completeArray = [];
    let password = '';

    if (upperCase){ 
      completeArray = completeArray.concat(upperCaseLetters);
    };

    if (lowerCase){
      completeArray = completeArray.concat(lowerCaseLetters);
    };

    if (number) {
      completeArray = completeArray.concat(numberArray);
    };

    if (symbols) {
      completeArray = completeArray.concat(symbolsArray);
    };


  for (let i = 0; i < length; i++) {
    var a = Math.floor(Math.random() * completeArray.length);
    password += completeArray[a];
    

  };

  document.getElementById("password").value = password;


};

generateBtn.addEventListener("click", writePassword); 




