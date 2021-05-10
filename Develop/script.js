// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;

// Numbers 
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Special characters 
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "-", "=", "{", "}", "|"];
// Alphabetetical Letters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase conversion 
up = [];

var toUpper = function (x) {
  return x.toUpperCase();
};

alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword ();
  document.getElementById("password").placeholder = ps;
});

// Function to generate the password
function generatePassword() {
  enter = prompt("How many characters would you like in your password? Choose between 8 and 128");
  if (!enter) {
    alert("This requires a value!");
  } else if (enter <8 || enter > 128) {

    enter = prompt("You must choose a number between 8 and 128");

  } else {
    confirmNumber = confirm("Do you want to have numbers in your password?");
    confirmCharacter = confirm("Do you want to have special characters in your password?");
    confirmLowercase = confirm("Do you want to have lowercase letters in your password?");
    confirmUppercase = confirm("Do you want to have uppercase letters in your password?");
  };

  // If user selects NO on all 4 prompts
  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = alert("You need to choose a criteria");
  }

  // If user selects "OK" on all 4 prompts
  else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
    choices = character.concat(number, alphabet, alphabet2)
  }
  
  // If user selects "OK" on 3 prompts
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alphabet);
  }
  else if (confirmCharacter && confirmUppercase && confirmLowercase) {
    choices = character.concat(alphabet2, alphabet);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alphabet2);
  }
  else if (confirmNumber && confirmUppercase && confirmLowercase) {
    choices = number.concat(alphabet2, alphabet);
  }

  // If user selects "OK" on 2 prompts 
  else if (confirmNumber && confirmCharacter) {
    choices = number.concat(character);
  }
  else if (confirmNumber && confirmLowercase) {
    choices = number.concat(alphabet);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alphabet2);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = alphabet.concat(alphabet2);
  }
  else if (confirmLowercase && confirmCharacter) {
    choices = alphabet.concat(character);
  }
  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alphabet2);
  }

  // If user selects "OK" on only 1 prompt
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmLowercase) {
    choices = alphabet;
  }
  else if (confirmUppercase) {
    choices = up.concat(alphabet2)
  }

  var password = [];

  // Set up random selection
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var pass = password.join("");
  UserInput(pass);
  return pass;
}

// Function to get the password out
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}