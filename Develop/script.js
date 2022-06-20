// Assignment code here
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
	length: "",
	lowercase: "",
	uppercase: "",
	numeric: "",
	specialCharacters: ""
};

var characterTypes = function() {
	// choose whether or not to include lowercase characters
	passwordCriteria.lowercase = window.prompt("Do you want to include lowercase characters? Enter yes or no.");
	passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
	if (passwordCriteria.lowercase === "yes") {
		window.alert("Your password will include lowercase characters.");
		passwordCriteria.lowercase = true;
	}
	else if (passwordCriteria.lowercase === "no") {
		window.alert("Your password will NOT include lowercase characters.");
		passwordCriteria.lowercase = false;
	}
	// choose whether or not to include uppercase characters
	passwordCriteria.uppercase = window.prompt("Do you want to include uppercase characters? Enter yes or no.");
	passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
	if (passwordCriteria.uppercase === "yes") {
		window.alert("Your password will include uppercase characters.");
		passwordCriteria.uppercase = true;
	}
	else if (passwordCriteria.uppercase === "no") {
		window.alert("Your password will NOT include uppercase characters.");
		passwordCriteria.uppercase = false;
	}
	// prompt to choose whether or not to include numeric characters
	passwordCriteria.numeric = window.prompt("Do you want to include numeric characters? Enter yes or no.");
	passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
	if (passwordCriteria.numeric === "yes") {
		window.alert("Your password will include numeric characters.");
		passwordCriteria.numeric = true;
	}
	else if (passwordCriteria.numeric === "no") {
		window.alert("Your password will NOT include numeric characters.");
		passwordCriteria.numeric = false;
	}
	// choose whether or not to include special characters
	passwordCriteria.specialCharacters = window.prompt("Do you want to include special characters? Enter yes or no.");
	passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
	if (passwordCriteria.specialCharacters === "yes") {
		window.alert("Your password will include special characters.");
		passwordCriteria.specialCharacters = true;
	}
	else if (passwordCriteria.specialCharacters === "no") {
		window.alert("Your password will NOT include special characters.");
		passwordCriteria.specialCharacters = false;
	}
	if (passwordCriteria.lowercase === false && 
		passwordCriteria.uppercase === false && 
		passwordCriteria.numeric === false && 
		passwordCriteria.specialCharacters === false) {
		window.alert("You need to pick at least one character type.");
		characterTypes();
	}
};

// generates password 
var generatePassword = function() {
	// set length of the password
	passwordCriteria.length = window.prompt("Choose the length of the password (at least 8 characters and no more than 128).");
	// changes string from passwordLength prompt to an integer
	passwordCriteria.length = parseInt(passwordCriteria.length);
	// asks user to enter valid length
	if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
		window.alert("You did not enter a valid length. Please try again.");
		generatePassword();
	}
	else {
		window.alert("You have entered a length of " + passwordCriteria.length + ".");
	}

	window.alert("What character types do you want to use? Choose at least one.");

	characterTypes();

	window.alert("Generating password.");

	function makePassword() {
		var characters = "";
		if (passwordCriteria.lowercase === true) {
			characters = "abcdefghijklmnopqrstuvwxyz";
		}
		if (passwordCriteria.uppercase === true) {
			characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		}
		if (passwordCriteria.numeric === true) {
			characters = characters + "0123456789";
		}
		if (passwordCriteria.specialCharacters === true) {
			characters = characters + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
		}
		var result = "";
		var length = passwordCriteria.length;
		for (var i = 0, n = characters.length; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * n));
		}
		window.alert("Your new password is " + result);
		return result;
	}
	
	makePassword();
};

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
