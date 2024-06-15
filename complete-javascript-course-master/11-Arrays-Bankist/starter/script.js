'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SIMPLE ARRAY METHODS

// Slice Method
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); // ['c','d','e'] Here the first 2 represents the index no. from which it should start
// console.log(arr.slice(2, 4)); // ['c','d'] Here the second no. represents the index no. from which it should not be included. Therefore, the length of this array is 4-2 = 2
// console.log(arr.slice(-1)); // ['e'] Here the -1 represents that 1 element from back will be put in an another array
// console.log(arr.slice(2, -2)); // Here first 2 represents the start index no. and second -2 represents 2 elements from back needs to be eliminated
// console.log(arr.slice(-2, 1)); // [] As it cant be created
// console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] // Shallow copy is created
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e'] // This also creates a shallow copy but above can be used in chaining multiple array methods
//Note: It doesn't change the original array it only creates a copy of it.

// Splice Methodn(It make changes in the original array)
//console.log(arr.splice(2)); //['c','d','e'] Here it acts as same as the slice method
//console.log(arr); // ['a','b'] As only first two elements left as it has been spliced earlier
//console.log(arr.splice(-1)); //['b'] it shows the deleted item.
// console.log(arr.splice(1, 2)); //['b','c'] Here second 2 represents how many elements need to be deleted
// console.log(arr); // ['a','d','e']

// Reverse Method(It make changes to the original array)
// console.log(arr.reverse()); // ['e','d','c','b','a']
// console.log(arr); // ['e','d','c','b','a']
// const arr2 = ['f', 'g', 'h', 'i', 'j'];

//Concat Method(It doesn't mutuate the original array)
// const letters = arr.concat(arr2);
// console.log(letters); // ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j'] This is also another way

// Join Method
// console.log(letters.join('-')); //e-d-c-b-a-f-g-h-i-j

// THE NEW 'AT' METHOD (It doesn't change the original array)
// const arr3 = [11, 22, 33];
// console.log(arr3[0]); //11
// console.log(arr3.at(0)); //11 At method or a new modern method
// Getting the last element of the array
// console.log(arr3[arr3.length-1]);//33
// console.log(arr3.at(-1));//33 New modern way
// console.log(arr3); // [11, 22, 33]
// 'At' Method also works on strings
// const str = 'Alok';
// console.log(str.at(0)); // A
// console.log(str.at(-1)); // k

//FOREACH Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// By For Of loop-1
// for(const movement of movements){
//   if(movement>0){
//     console.log(`You have deposited ${movement} amount`);
//   } else{
//     console.log(`You have withdrawn ${Math.abs(movement)} amount`);
//   }
//}

// forEach Method-1
// movements.forEach(function(movement){ //forEach actually let the each iteration do what mentioned in the function
//   if(movement>0){
//         console.log(`You have deposited ${movement} amount`);
//       } else{
//         console.log(`You have withdrawn ${Math.abs(movement)} amount`);
//       }
// });

// By For Of loop-2
// for(const [i, movement] of movements.entries()){
//   if(movement>0){
//     console.log(`Movement ${i+1}: You have deposited ${movement} amount`);
//   } else{
//     console.log(`Movement ${i+1}: You have withdrawn ${Math.abs(movement)} amount`);
//   }
// }

// forEach Method-2
// movements.forEach(function(mov, i, arr){ // Mind it that here the order of arguments matter i.e. mov- the element of the array, i- is the index of the element, arr- is the array
//   if(mov>0){
//         console.log(`Movement ${i+1}: You have deposited ${mov} amount`);
//       } else{
//         console.log(`Movement ${i+1}: You have withdrawn ${Math.abs(mov)} amount`);
//       }
// });

//Note: when to use For of loop and when to use forEach loop
// In forEach loop you cannot use continue / break statements

// FOREACH FOR MAPS & SETS
// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   // Here also the order of arguments matter. i.e. first arg- value of the current key, second arg- current key, third arg- map
//   console.log(`${key}: ${value}`);
// });

//Set
// const currenciesUnique = new Set(['USD', 'INR', 'GBP']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value,_,map){ // Here also the order of arguments matter. And it is similar to map
// console.log(`${value}: ${value}`);
// });

// CREATING DOM ELEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // innerHTML is set to '' i.e empty because we want to fill the movements container with fresh data

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
   <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
   <div class="movements__value">${mov}€</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html); //insertAdjacentHTML is a method used to insert the code which takes two arguments 1. where to place the code 2. which code to place
  });
};

// COMPUTING USERNAMES
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(names => names[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);

// DISPLAY BALANCE
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// DISPLAY IN, OUT & INTEREST
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  displayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// IMPLEMENTING LOGIN FUNCTIONALITY
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    accs => accs.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //UpdateUI
    updateUI(currentAccount);
  }
});

// IMPLEMENTING TRANSFER FUNCTIONALITY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  console.log(amount, receiverAccount);
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //UpdateUI
    updateUI(currentAccount);
  }
});

// IMPLEMENTING REQUEST LOAN FUNCTIONALITY
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
  }
  inputLoanAmount.value = '';
  updateUI(currentAccount);
});

// IMPLEMENTING CLOSE ACCOUNT FUNCTIONALITY
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delet account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// IMPLEMENTING SORT FUNCTIONALITY
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// CODING CHALLENEGE
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const copyDogsJulia = [...dogsJulia]; // creating a shallow copy
// copyDogsJulia.splice(0, 1);
// copyDogsJulia.splice(-2);
// // console.log(copyDogsJulia);

// const checkDogs = function (arr1, arr2) {
//   const dogs = arr1.concat(arr2);
//   dogs.forEach(function (age, i) {
//     const type = age >= 3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${i + 1} is an ${type}, and is ${age} years old`);
//   });
// };
// checkDogs(copyDogsJulia, dogsKate);

// DATA TRANSFORMATION: MAP REDUCE FILTER

// MAP METHOD
// Map method is similar to forEach method it also takes a callback function with the same sequence of arguments
// The only difference is it returns a new array with the results of the applied operation on each element of the original array
// const eurtoUSD = 1.1;
// const movementsUSD = movements.map(mov => mov * eurtoUSD); //using arraow function
// console.log(movementsUSD);

// const movementsDescription = movements.map((mov, i) => {
//   const type = mov > 0 ? 'deposited' : 'withdrawn';
//   return `Movement ${i + 1}: You have ${type} ${Math.abs(mov)} amount`;
// });
// console.log(movementsDescription);

// NOTE: Now you could say, that what we did here with this map method is essentially the same as what we did with the, for each method.
// But in fact, there is a big, big difference between these two approaches. So before we printed each line individually
// to the console, as we were looping over the array. So in each of the iterations, we performed some action that was then visible in the console
// and we can call this a side effect. So the, for each method creates side effects. But now here with this map method, all we did was to return each
// of the strings from the callback. And so basically they got added into a new array. And then finally we logged that entire array to the console and not the elements one by one.
// And so here in this map method we did not create a side effect in each of the iteration.

// FILTER METHOD
// filter method is similar to forEach method it also takes a callback function with the same sequence of arguments
// The only difference is it returns a new array with the filtered results of the applied operation on the original array
// const deposits = movements.filter(function(mov){
//   return mov>0;
// });
// console.log(deposits);

// REDUCE METHOD
// Reduce method is similar to forEach method it also takes a callback function with the same sequence of arguments but before the current element it takes accumulator argument
// The only difference is it returns a single value of the applied operation on the original array
// const reducedSum = movements.reduce((acc, mov) =>{
// return acc + mov;
// },0); // Here, 0 represents the initial value of 'acc' i.e accumulator
// console.log(reducedSum);

// Maximum value
// const findMaxValue = movements.reduce((acc,mov)=>{
//   return mov>acc?mov:acc},movements[0]);
// console.log(findMaxValue);

//CODING CHALLENGE-2
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   // console.log(humanAge);
//   const correctedHumanAge = humanAge.filter((lowAge, i) => {
//     if (lowAge > 18) {
//       return humanAge;
//     }
//   });
//   // console.log(correctedHumanAge);
//   const avgHumanAge = correctedHumanAge.reduce((acc, mov, _, arr) => {
//     return acc + mov / arr.length;
//   }, 0);
//   // console.log(avgHumanAge);
//   return avgHumanAge;
// };
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// THE MAGIC OF CHAINING METHODS
// const amountUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov,i,arr) => {
//     console.log(arr);  // Since in this chaining of array method it is difficult to find the bug, we can see the filtered arr in the map before returning and similarly mapped arr under reduce method before returning
//     return mov * 1.1})
//   //.map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(amountUSD);

// CODING CHALLENEG-3
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(lowAge => lowAge > 18)
//     .reduce((acc, mov, _, arr) => acc + mov / arr.length, 0);

// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// THE FIND METHOD
// const firstWitdrawal = movements.find(mov => mov<0);
// console.log(movements);
// console.log(firstWitdrawal);
//NOTE: the Find method is a bit similar to the Filter method, but there are two fundamental differences. First Filter returns all the elements
// that match the condition while the Find method only returns the first one and second and even more important, the Filter method returns a new array while Find only returns the element itself
// and not an array, okay? So make sure that you understand this fundamental difference.

// SOME & EVERY METHODS

// Looking for exact value or Equality
// console.log(movements.includes(-130));

// // SOME: Looking for any with a condition
// const anyDeposits = movements.some(mov => mov>0);
// console.log(anyDeposits); //true

// EVERY: Looking for in every with a condition
// console.log(movements.every(mov=> mov>0)); //false

// FLAT & FLATMAP
// Flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); //[1,2,3,4,5,6,7,8] The default argument is 1 here which represents the depth of the destructuring nested array

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); //[1,2,3,4,5,6,7,8] Here two layers of nesting is there so argument is 2

// const acc = accounts
//   .map(mov => mov.movements)
//   .flat()
//   .reduce((acu, mov) => acu + mov, 0);
// console.log(acc); //17840

// // FlatMap
// const acc2 = accounts
//   .flatMap(mov => mov.movements) //Remember flatMap goes only one level deep so if you wish to go deeper then you need to use flat method
//   .reduce((acu, mov) => acu + mov, 0);
// console.log(acc2); //17840

// SORTING ARRAYS (It is a mutating method)
//Strings
// const owners = ['Zackaria', 'Surbhi', 'Yashmin', 'Rashmi', 'Vishakha'];
// console.log(owners.sort()); //['Rashmi', 'Surbhi', 'Vishakha', 'Yashmin', 'Zackaria']
// Note:sort method first convert all to strings and then sorts so for numbers it may look random

//Numbers (fixing the sort with callback function)
// return < 0 A,B (keep the order)
// return > 0 B,A (reverse the order)

// const ascending = movements.sort((a,b)=>{
//   if(a>b){
//     return 1;
//   } if(b>a){
//     return -1;
//   }
// });

// or
// const ascending = movements.sort((a,b)=> a-b);
// console.log(ascending);
//Note: Donot use sort method on a mixed array

// ARRAY METHODS PRACTICE
// // 1. Find the sumtotal of all the transactions from all the accounts
// const sumtotal = accounts
//   .flatMap(mov => mov.movements)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(sumtotal);

// // 2. Find the sum of all the deposits from all the accounts
// const deposit = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(deposit);

// // 3. Find the total no. of deposits from all the accounts (Using .length & reduce method)
// const totalDeposit1 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(totalDeposit1); // 6

// const totalDeposit2 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000)
//   .reduce((count, curr) => ++count, 0);
// console.log(totalDeposit2); //6

// // 4. Create an object output with deposits & withdrawals as properties denoting total deposits & withdrawals in them
// const object = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, curr) => {
//       // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
//       sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
//       return sums;
//     },
//     {
//       deposits: 0,
//       withdrawals: 0,
//     }
//   );
// console.log(object);

// // 5. convert 'this is a nice title' -> This Is a Nice Title
// const convert = function (title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const mov = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     ).join(' ');
//   console.log(mov);
// };
// convert('this is a nice title');

// CODING CHALLENGE - 4
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
*/
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(mov => (mov.foodRecomended = Math.trunc(mov.weight ** 0.75 * 28)));
console.log(dogs);

//2.
const findSarah = dogs.find(mov => mov.owners.includes('Sarah'));
console.log(findSarah);
console.log(
  `it's eating too ${
    findSarah.curFood > findSarah.foodRecomended ? 'much' : 'little'
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter(mov => mov.curFood > mov.foodRecomended)
  .flatMap(mov => mov.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(mov => mov.curFood < mov.foodRecomended)
  .flatMap(mov => mov.owners);
console.log(ownersEatTooLittle);

//4. "Matilda and Alice and Bob's dogs eat too much!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

//5.
console.log(dogs.some(mov => mov.curFood === mov.foodRecomended)); //false

//6.
console.log(
  dogs.some(
    mov =>
      mov.curFood >= mov.foodRecomended * 0.9 &&
      mov.curFood <= mov.foodRecomended * 1.1
  )
); //true

//7. 
const dogsEatingOkay = dogs.filter(mov=> mov.curFood >= mov.foodRecomended * 0.9 &&
  mov.curFood <= mov.foodRecomended * 1.1 );
  console.log(dogsEatingOkay);

//8.
const dogsCopy = dogs.slice().sort((a,b)=>a.foodRecomended - b.foodRecomended);
console.log(dogsCopy);
*/

/*
Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1.  Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2.  Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1  🐶
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 4.  Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const copyDogsJulia = dogsJulia.slice().splice(1, 2);
// console.log(copyDogsJulia);
// const checkDogs = function (arr1, arr2) {
//   // for(let i=0; i<copyDogsJulia.length; i++){
//   //  console.log(copyDogsJulia[i]>=3 ? `Dog number ${i+1} is an adult and is ${copyDogsJulia[i]} year old`:`Dog number ${i+1} is a puppy and is ${copyDogsJulia[i]} year old`);
//   // }
//   // for(let j=0; j<dogsKate.length; j++){
//   //  console.log(dogsKate[j]>=3 ? `Dog number ${j+1} is an adult and is ${dogsKate[j]} year old`:`Dog number ${j+1} is a puppy and is ${dogsKate[j]} year old`);
//   // }
//   const dogs = arr1.concat(arr2);
//     dogs.forEach((age, i) => {
//     console.log(age >=3 ? `Dog number ${i + 1} is an adult and is ${age} year old` : `Dog number ${i + 1} is a puppy and is ${age} year old`) ;
//     });
// };
// checkDogs(copyDogsJulia, dogsKate);

/*
Coding Challenge #2 & #3
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1.  Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2.  Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3.  Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4.  Run the function for both test datasets
Test data:
§  Data 1: [5, 2, 4, 1, 15, 8, 3]
§  Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
// const ages1 = [5, 2, 4, 1, 15, 8, 3];
// const ages2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = ages => {
//   return ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, mov, _, arr) => acc + mov / arr.length, 0);
// };

// console.log(calcAverageHumanAge(ages1));

// CODING CHALLENGE - 4
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
*/

