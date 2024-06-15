'use strict';
/*
console.log(document.querySelector('.message').textContent);
*/
/*
//SELECTING & MANIPULATING DOM
//reaching out to the element and consoling it to see if we have reached to the desired element
console.log(document.querySelector('.message').textContent);
//making a change to the reached element
document.querySelector('.message').textContent = 'correct Number!';
//seeing the changed element in the console log
console.log(document.querySelector('.message').textContent);

//Manipulating the question mark, score & empty box
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value=10; // when taking a number in the input we change in "value"
console.log(document.querySelector('.guess').value=10);
*/

//HANDLING CLICK EVENTS
//On clicking the the check button it should console the guessed number.
//Step-1 (Reach to the check button)
//document.querySelector('.check');
//Step-2 (Listen to the click of the check button)
//document.querySelector('.check').addEventListener('click'); // addEventListener is a type of Event Handler which guides how to react after reaching to the element
//Step-3 (Pass a function that what it should do on clicking the check button i.e console the guess no.)
// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);
// })
/*
// Learning on Implementing the game logic 
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Originally when the user gives input it is in string. So, we need to convert it to a Number
  console.log(guess, typeof guess);
  if (!guess) {
    console.log((document.querySelector('.message').textContent = 'No Number'));
  }
});
*/

//IMPLEMENTING THE GAME LOGIC
//Step-1 Generate the random no.
let randomNumber = Math.trunc(Math.random() * 20) + 1; //because we need a no. between 1 & 20
//Step-3 Handling score
let score = 20;
//Step-4 Handling Highscore
let highScore = 0;
//Step-5 Making our code DRY
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Step-2 Going for a click event handling for the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When the player wins!
  if (guess === randomNumber) {
    displayMessage('Yay you are correct!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Implementing Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When no guess is made
  } else if (!guess) {
    displayMessage('Type a no.!');
    //When the guess is wrong!
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'No. is too high!' : 'No. is too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You loose!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  //When the guess is high
  else if (guess > randomNumber) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'No. is too high!')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(
        (document.querySelector('.message').textContent = 'You loose!')
      );
      document.querySelector('.score').textContent = 0;
    }
    //When the guess is low
  } else {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'No. is too low!')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(
        (document.querySelector('.message').textContent = 'You loose!')
      );
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
