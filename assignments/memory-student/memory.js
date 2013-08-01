//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  $('#small').click(startGame);
});


// Initializes the game and creates the board
function startGame() {
for (var i = 0; i < lettersSmall.length; i++) {
  $('#game').append('<div class="column" id =' + i + '>' + '</div>');
   $('#' + i).click(cardClick);
 }
}

// Flips a card and checks for a match
function cardClick() {
  lastId = $(this).attr('id');
  lastCard = $(this).text(lettersSmall[lastId]);
  console.log(lastId);
  console.log(lastCard);
 if (lastCard === lettersSmall[$(this).attr('id')] && lastId !== $(this).attr('id')) {
          $('#' + lastId).addClass('found');
          $(this).addClass('found');
          $('#' + lastId).text(lettersSmall[lastId]);
          $(this).text(lettersSmall[lastId]);
          lastId = "";
          if ($('.found').length === 10) {
              $('#game div').addClass('won');
          }
      } else {
          $('#' + lastId).text(' ');
          lastId = $(this).attr('id');
          lastCard = lettersSmall[$(this).attr('id')];
      }
}

//Add hoverclass to cards.
function hovering() {

}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}

