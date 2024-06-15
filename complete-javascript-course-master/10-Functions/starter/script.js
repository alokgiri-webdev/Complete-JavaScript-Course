'use strict';
// DEFAULT PARAMETER
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassenger = 2, // 2* price cant be done as until now price id not declared
//   price = 2 * numPassenger // Note: numPassenger can be used in price only because it has been declared earlier.
// ) {
//   //This is how in modern JS we can assign default parameters
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// console.log(bookings);
// createBooking('LH123', '20', '144');
// createBooking('AA123', '26', '108');
// createBooking('AL123', undefined, '200'); // If we want any parameter to stay in default mode we can mention it as 'undefined'.

// HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE
// const flight = 'LH123';
// const alok = {
//   name: 'Alok Kumar Giri',
//   passportNum: 12345678,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'AL123';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passportNum === '98765432') {
//     console.log('CheckIn');
//   } else {
//     console.log('CheckOut');
//   }
// };

// checkIn(flight, alok);
// console.log(flight); //'LH123'
// console.log(alok); //'name: Mr. Alok Kumar Giri'

// FIRST CLASS & HIGHER-ORDER FUNCTION
// First class functions: These are passed as values to variables, Method, as arguments & return
// Higher-order function: Which take first class functions as arguments & as return function

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
// const oneWord = function(str){
// return str.replaceAll(' ','').toLowerCase();
// }
// const upperFirstWord = function(str){
// const [first, ...others] = str.split(' ');
// return [first.toUpperCase(), ...others].join(' ');
// }
// // Higher-order function accepting callback functions
// const transformed = function(str,fn){
// console.log(`${fn(str)}`);
// console.log(str);
// }
// transformed('JavaScript is the best language', upperFirstWord);
// transformed('JavaScript is the best language', oneWord);

// FUNCTIONS RETURNING FUNCTIONS
// const greet = function(greetings){
//     return function(name){
//         console.log(`${greetings} ${name}`);
//     }
// }
// const greetHey = greet('Hey'); //greetHey is the returned function which is a value
// greetHey('Alok');
// // The above can also be written as
// greet('Hey')('Ankit');

//THE CALL & APPLY METHODS
//Here setting the 'this' keyword manually
// const Luftansa = {
//   airline: 'Lufthansa',
//   flightcode: 'LH',
//   bookings: [],
//   book(flightNum, passengerName) {
//     console.log(
//       `${passengerName} booked a seat on ${this.airline} flight with ${this.flightcode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.flightcode}${flightNum}, ${passengerName}`,
//     });
//   },
// };
// Luftansa.book(123, 'Alok'); //Here this keyword points to the Lufthansa object as it called the method book
// // But if in future,

// const eurowings = {
//   airline: 'eurowing',
//   flightcode: 'EU',
//   bookings: [],
//   //Now creating a book function here again will violet the DRY principal
// };
// // But we want book function which acts on eurowings
// Luftansa.book.call(eurowings, 321, 'Ankit'); // call(sets the new this keyword to the new object, para-1, para-2)
// // NOTE: these property names,they all need to have the exact same format as this original object here because this method is trying to read just these properties.

// //Apply method (It is also same as Call, the only difference is that it takes the arguments in array format after the mentioned this keyword)
// const flightData = [786, 'Ajay'];
// Luftansa.book.apply(eurowings, flightData); //Apply is avoided these days as we have a better way i.e Luftansa.book.call(eurowings,...flightData); using spread operator
// console.log(eurowings);

// // THE BIND METHOD
// const bookEuro = Luftansa.book.bind(eurowings); //Here we bind the this keyword in a variable which can be called where eurowings is a fixed this keyword
// bookEuro(23, 'Alok Kumar Giri');
// // Similarly we can bind multiple arguments
// const bookEW23 = Luftansa.book.bind(eurowings, 23); // Now here we bind two arguments fixed
// bookEW23('Ankit Giri');
// //Note: Instead of call again and again we can bind once and use that

// // With Eventlisteners
// Luftansa.planes = 300; // Adding a new property to Lufthansa object
// Luftansa.buyPlanes = function () {
//   // Adding a new method to Lufthansa object
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // Luftansa.buyPlanes(); // When this is commented
// // document.querySelector('.buy').addEventListener('click',Luftansa.buyPlanes); // Here the this keyword points to the button 'buy'
// document
//   .querySelector('.buy')
//   .addEventListener('click', Luftansa.buyPlanes.bind(Luftansa)); //So we use bind to redirect to Lufthansa object to get the desired output

// //Partial Application
// const addTax = (rate,value) => value + value*rate;
// console.log(addTax(0.1, 200));
// //Now suppose we need to preset the rate parameter for another variable which follows same logic as addtax
// const addVAT = addTax.bind(null,0.23); // Since here there's no use of this keyword thats why we have kept it as null
// console.log(addVAT(200));

//CODING CHALLENEGE-1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Get Answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     // Register answer using short-circuiting
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// //poll.registerNewAnswer();

// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// CLOSURES

/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
Your tasks:
1.  Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
1.1.     Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
What is your favourite programming language? 0: JavaScript
1: Python 2: Rust 3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
2.  Call this method whenever the user clicks the "Answer poll" button.
3.  Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4.  Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

Test data for bonus:
§  Data 1: [5, 2, 3]
§  Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`
      )
    );
    console.log(answer);
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    //   console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

*/

/*
Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
1.  Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
})();