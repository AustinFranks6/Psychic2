let userChoice = "c";

let userGuesses = [];

let chances = 5;

let wins = 0;
let losses = 0;

let chosenLetter = null;

//GETS RANDOM NUMBER FROM ARRAY
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];

// let randomLetter = Math.floor(Math.random() * letters.length);
// let chosenLetter = letters[randomLetter];

let chancesUpdated = function() {
    document.querySelector("#chancesLeft").innerHTML = chances;
};

let chosenLetterUpdated = function() {
    chosenLetter = letters[Math.floor(Math.random() * letters.length)];

};

let userGuessesUpdated = function() {
    document.querySelector("#guessedLetters").innerHTML = userGuesses.join(", ");
};

let reset = function() {
    chances = 5;
    userGuesses = [];
    chancesUpdated();
    userGuessesUpdated();
  };

chosenLetterUpdated();
chancesUpdated();

document.onkeydown = function(event) {
    chances--;

    let letter = String.fromCharCode(event.which).toLowerCase();

    userGuesses.push(letter);

    userGuessesUpdated();
    chancesUpdated();

    if (letter === chosenLetter) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        reset();

    }

    if (chances === 0 ) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
 
        reset();
    }

}