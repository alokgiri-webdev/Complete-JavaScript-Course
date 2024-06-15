'use strict';
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // We can get Element's "Id" by this way too
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const initialization = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  player0El.classList.remove('player--winner'); // JS will do nothing if this player wasn't added
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active'); // JS will do nothing if the player was already active
  player1El.classList.remove('player--active');
};
initialization();
// Switch Player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const diceRandomNumber = Math.trunc(Math.random() * 6) + 1;
    // 2. Displaying the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRandomNumber}.png`;
    if (diceRandomNumber != 1) {
      currentScore += diceRandomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // 3. Check for roll 1 if true, switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to the active player's score
    scores[activePlayer] += currentScore;

    // Display the player's score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
    } else {
      //Switch Player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', initialization);
