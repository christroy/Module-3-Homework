// Assignment code here
capAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
regAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "+"];

var chooseLengths;
var chooseNumber;
var chooseSymbol;
var chooseLengths;
var chooseCapital;
var chooseLower;


function getRandomChar(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomChar = arr[randomIndex];
    console.log("working");
    console.log(randomChar);
    return randomChar;
};


function generatePassword() {
    var lengths = parseInt(window.prompt("Please pick a password length between 8 and 64 characters."));
    console.log("lenghts: ", lengths);
    if (lengths == null) {
        window.prompt("Password lenght should be between 8 and 64 characters.")
    }
    if (lengths < 8 || lengths >= 64) {
        window.prompt("Password lenght should be between 8 and 64 characters.")
    }
    chooseCapital = window.confirm("Do you want to include capital letters?");
    chooseLower = window.confirm("Do you want to include lowercase letters?");
    chooseNumber = window.confirm("Do you want to include numbers?");
    chooseSymbol = window.confirm("Do you want to include symbols?");

    var selection = [];


    if (chooseCapital) {
        selection = selection.concat(capAlphabet);
    }

    if (chooseLower) {
        selection = selection.concat(regAlphabet);
    }

    if (chooseNumber) {
        selection = selection.concat(numbers);
    }

    if (chooseSymbol) {
        selection = selection.concat(symbols);
    }
    var result = [];
 
    for (var i = 0; i < lengths; i++) {
        
        var randomChar = getRandomChar(selection);
        console.log("hellotest")
        console.log(randomChar);
        result.push(randomChar);
    }
    console.log(result);

    return result.join("");

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log(password)
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);