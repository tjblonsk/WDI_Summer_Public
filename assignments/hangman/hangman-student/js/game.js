

var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){

  this.secretWord = this.wordList[_.random(this.wordList.length - 1)];
  },


  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){
   // var guessedLetters = ['r', 'u', 'x', 'm'];
   var correctLetters = _.intersection(this.secretWord, guessedLetters);
   var displayWord = this.secretWord.replace(/\w/g, "_ ");
   var wrongLetters = _.reject(guessedLetters, function(letter){
    return _.contains(correctLetters, letter);
    });
   if (correctLetters.length > 0) {
    document.getElementById('guessesLeft').innerHTML = correctLetters + displayWord;
    }
   else {
    document.getElementById('guessesLeft').innerHTML = displayWord;
    }
   document.getElementById('guessedLetters').innerHTML = wrongLetters;
    }
  };


var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
  player.guessedLetters.push(letter);
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    word.checkLetters(wordString);
    if (correctLetters == word.secretWord){
      alert("you win");
    }
  },

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){
    if (wrongLetter.pop(secretWord).length > 8) {
      alert("game over!");
    }
  }
};


var game = {
  // Resets the game
  resetGame: function(){
    word.setSecretWord();
    player.guessedLetters = [];
  },

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    alert("game over, secret word is:" word.SecretWord);
    word.setSecretWord();
    player.guessedLetters = [];
  },

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
    alert("guessed letters:" player.guessedLetters);
  }
};


window.onload = function(){

word;
player;

word.setSecretWord();
console.log(word.secretWord);
console.log(player.guessedLetters);


  // Start a new game

  // Add event listener to the letter input field to grab letters that are guessed
  document.getElementById('letterField').onkeypress = function(event){
  player.makeGuess(document.getElementById('letterField').value);
  if (document.getElementById('letterField').value != "") {
  word.checkLetters(player.guessedLetters);
    }
  };
  // Add event listener to the reset button to reset the game when clicked
  document.getElementById('resetButton').onclick = function(event) {
    game.resetGame();
    console.log("click");
  };

  // Add event listener to the give up button to give up when clicked
   document.getElementById('gameControlArea').children[0].onclick = function(event) {
    game.giveUp();
    console.log("click");
  };
};







