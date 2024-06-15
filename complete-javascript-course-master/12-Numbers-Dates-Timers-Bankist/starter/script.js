'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-02-21T23:36:17.929Z',
    '2024-02-22T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-GB', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-GB',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) {
    return 'Today';
  }
  if (daysPassed === 1) {
    return 'Yesterday';
  }
  if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// Currency formating
const currencyFormatting = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovements = currencyFormatting(
      mov,
      acc.locale,
      acc.currency
    );

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovements}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = currencyFormatting(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = currencyFormatting(
    incomes,
    acc.locale,
    acc.currency
  );

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = currencyFormatting(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = currencyFormatting(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};


// Setting Counter

const startLogOutTimer = function () {
  // Set Timer to 5 mins
  let time = 100;
  
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec = String(time % 60).padStart(2,0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}` ;
    
    // When 0 seconds, stopTimer & logout the user
    if(time === 0){
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  }

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// EXPERIMENTING
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};
const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Creating Date & Time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const date = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const mins = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${date}/${month}/${year}, ${hour}:${mins}`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    if(timer){
      clearInterval(timer);
    }
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      
      //Reset Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// CONVERTING & CHECKING NUMBERS
// MATH & ROUNDING
// THE REMAINDER OPERATOR

// NUMERIC SEPERATORS
// const diameter = 287_480_000_000; // This underscores makes it easier for the reader to know the no.
// const transferFee1 = 15_00; // 15 rs
// const transferFee2 = 1_500; // 1,500
// //Restrictions on where we can use and where not
// const PI = 3.1415 // All these are not allowed:- _3.1415, 3_.1415, 3._1415, 3.1415_
// This will also not work:= console.log(Number('230_000'));

// WORKING WITH BIGINT
// console.log(2 ** 53 - 1); // This is the biggest no.
// console.log(Number.MAX_SAFE_INTEGER); // Gives the same biggest no.

// // In ES2020 BigInt was introduced to deal with bigger nos.
// console.log(999999999999999999999999999999999n); //Writing a large no. with 'n' at last converts it to bigint
// console.log(BigInt(999999999)); // 999999999n

// //Operations
// console.log(100n + 100n); //200n
// console.log(200n * 300n); //60000n
// // But BigInt with nornmal nos is not allowed
// //console.log(100n * 23); // error
// //console.log(Math.sqrt(16n)); //error
// console.log(100n * BigInt(23)); //2300n
// const huge = 99999999n;
// //Exceptions
// console.log(20n > 15); //true
// console.log(20n === 20); //false as === doesnt do insersive coersion
// console.log(20n == 20); //true
// console.log(huge + ' This is a big no.!!'); //99999999 This is a big no.!!
// //Divisions
// console.log(11n/3n); // 3n it ignores the decimal part

// CREATING DATES
/*
// Creating dates (There are five ways)
//1.
const now = new Date();
console.log(now); // Thu Feb 22 2024 17:14:04 GMT+0530 (India Standard Time)
//2.
console.log(new Date('Feb 22 2024 17:14:04')); //Thu Feb 22 2024 17:14:04 GMT+0530
//3.
console.log(new Date('November 12 1992')); //Thu Nov 12 1992 00:00:00 GMT+0530 (India Standard Time)
//4.
console.log(new Date(account1.movementsDates[0])); //Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)
//5.
console.log(new Date(1992, 10, 6, 5, 3)); //Fri Nov 06 1992 05:03:00 GMT+0530 (India Standard Time)

console.log(new Date(0)); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(3*24*60*60*1000)); // Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time), This is known as time stamp
*/
//Note: Date is a object and thus accepts methods on it
// Working with dates
// const future = new Date(1992, 10, 6, 5);
// console.log(future); // Fri Nov 06 1992 05:00:00 GMT+0530 (India Standard Time)
// console.log(future.getFullYear()); // 1992
// console.log(future.getMonth()); // 10 (Nov) as it starts with 0 based
// console.log(future.getDate()); // 6
// console.log(future.getDay()); // 5 (Fri)
// console.log(future.getHours()); // 5
// console.log(future.getMinutes()); // 0
// console.log(future.toISOString()); // 1992-11-05T23:30:00.000Z
// console.log(future.getTime()); // 721006200000

// console.log(new Date(721006200000)); //Fri Nov 06 1992 05:00:00 GMT+0530 (India Standard Time)
// //If want to know current timestamp
// console.log(Date.now()); //1708603918615
// console.log(future.setFullYear(2030));
// console.log(future); // Wed Nov 06 2030 05:00:00 GMT+0530 (India Standard Time)

// OPERATIONS WITH DATES
// const future = new Date(1992, 10, 6);
// console.log(+future);

// const calcDaysPassed = function(date1, date2){
//   return Maths.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// }
// console.log(calcDaysPassed(new Date(1992, 10, 6), new Date(1992, 10, 12)));

// SETTIMEOUT & SETINTERVAL

// const ingredients = ['Olive', 'Spinach'];
// const timer = setTimeout(
//   (ing1, ing2) => console.log(`I am cooking Pizza with ${ing1} and ${ing2}`),
//   3000,
//   // 'olive',
//   // 'cherry',
//   ...ingredients
// );
// console.log(timer); // I am cooking Pizza with olive and cherry
//Note: The arguments of the function is given only after the second argument which is a time in milisecond.

//ClearTimeOut
// clearTimeout(timer); // It stops the timer or the setTimeOut

//SetTimeInterval & clearTimeInterval
// const ingredients = ['Olive', 'Spinach'];
// const timer = setInterval(
//   (ing1, ing2) => console.log(`I am cooking Pizza with ${ing1} and ${ing2}`),
//   3000,
//   // 'olive',
//   // 'cherry',
//   ...ingredients
// );
// console.log(timer);

// clearInterval(timer);
//Note: The only difference is SetTimeout is run once while setInterval runs after every specified interval
