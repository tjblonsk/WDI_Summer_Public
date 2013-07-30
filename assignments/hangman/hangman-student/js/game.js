

var word = {
  // This is an attribute of the object word.
  secretWord: "model",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // START HERE: Step 1
  // Selects a random word from the word list sets the secret word
<<<<<<< HEAD
  setSecretWord: function(){

    this.secretWord = this.wordList[_.random(this.wordList.length - 1)];
  },

=======
  // it will set the secretWord attribute from Line 3
  setSecretWord: function(){
    //this.secretWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.secretWord = this.wordList[_.random(this.wordList.length - 1)];
  },
>>>>>>> ed9c4dd6948dec602b08f2199eac42e4eb3a3e43

  // This feels pretty hard- what can we do to make it easier, or fake it for the moment?
  // How do we deal with multiple, multiple occurrances of letters (ie. google)?
  // Takes an array of letters as input and returns an array of two items:
<<<<<<< HEAD
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

=======
  // 1) A string with the parts of the secret word that have been guessed correctly and an underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word. This is my 'wrongLetters' array
  checkLetters: function(guessedLetters){
    // How can I check against 'model'?
    // I have an array of guessed letters
    // I have my secret word of 'model'
    // this.secretWord; => model
    // guessedLetters; => mq 
    var correct_letters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = [];
    for(var i = 0; i < guessedLetters.length; i++) {
      for(var n = 0; n < this.secretWord.length; n++) {
        if(guessedLetters[i] !== this.secretWord[n]) {
          wrongLetters.push(guessedLetters[i]);
        }
      }
    }
    return ['m____',wrongLetters]; 
  }
};
>>>>>>> ed9c4dd6948dec602b08f2199eac42e4eb3a3e43

var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
  this.guessedLetters.push(letter);
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    word.checkLetters(wordString);
    if (correctLetters == word.secretWord){
      alert("you win");
    }
  },

  // Check if the player has lost and end the game if so
<<<<<<< HEAD
  checkLose: function(wrongLetters){
    if (wrongLetter.pop(secretWord).length > 8) {
      alert("game over!");
    }
=======
  // Assume they've guessed [x,z, k, p, q,s,t,v,7]
  // How can I test this? Where does wrongLetters come from?
  checkLose: function(wrongLetters){
    // if(!checkWin) {
    //   wrongLetters;
    // }
    return wrongLetters.length >= this.MAX_GUESSES;
>>>>>>> ed9c4dd6948dec602b08f2199eac42e4eb3a3e43
  }
};


var game = {
  // Resets the game
  resetGame: function(){
    word.setSecretWord();
    player.guessedLetters = [];
  },

  // // Reveals the answer to the secret word and ends the game
  // giveUp: function(){
  //   alert("game over, secret word is:" word.SecretWord);
  //   word.setSecretWord();
  //   player.guessedLetters = [];
  // },

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
    alert("guessed letters:" player.guessedLetters);
  }
};


window.onload = function(){
<<<<<<< HEAD

word;
player;

word.setSecretWord();
console.log(word.secretWord);
console.log(player.guessedLetters);


=======
  console.log(word.secretWord);
  console.log(word.checkLetters(['m', 'q'])[1]);

  // // Created a losing scenario
  // console.log(player.checkLose(wrongLettersArray));

  // Created a not yet losing scenario
  // console.log(player.checkLose(wrongLettersArray));
>>>>>>> ed9c4dd6948dec602b08f2199eac42e4eb3a3e43
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







