'use strict';

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/
//Data needed for first part of the section
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  // For the Object literal learnings
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Enhanced Object Literal:1
  openingHours, //Only calling this way is enough (Class: Object Literals)
  //Enhanced Object Literal:2
  order(starterIndex, mainCourseIndex) {
    //We dont have to compulsory put ':' & 'function'
    return [this.starterMenu[starterIndex], this.mainMenu[mainCourseIndex]]; // we can return in an array this way
  },
  orderDelivery: function ({
    address,
    time = '10', // setting default values for the output of the input objects
    mainCourseIndex = 1,
    starterIndex = 0,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainCourseIndex]} at ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    // In Spread Operator
    console.log(
      `Your delicious pasta is ready with ${ing1}, ${ing2} & ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    //Takes Rest Operator
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//DESTRUCTURING OF ARRAYS
/*
//Learning Destructuring of an array
// 1st way (Non-destructure way)
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
*/
/*
//2nd way (Destructured way)
const [x, y, z] = arr; // It destructures/unpack the array and not destroy i.e arr also exists.
console.log(x, y, z); // Square brackets in the left side means destructuring
*/
/*
const [x, , z] = arr; // while destructuring we can skip with comma to reach to the next element
console.log(x, z); //Result : 2, 4
*/

/*
restaurant.order(2,0);
console.log(restaurant.order(2,0));

//Receive 2 return values from a function
const[starter, mainCourse] = restaurant.order(2,0); //Destructuring from a method
console.log(starter, mainCourse);
*/

/*
//Switching variables
let [x,y] = arr;
console.log(x,y);

//Normal way of switching
// let temp = x;
// x = y;
// y = temp;
// console.log(x,y);

//New method
[x,y] = [y,x];
console.log(x,y);
*/

/*
//Destructuring of a nested array
const arr = [1,2,[3,4]];
// const[i, ,j] = arr;
// console.log(i,j); // Result: 1, [3,4]
const[i, ,[j,k]] = arr;
console.log(i,j,k); // Result: 1,3,4
*/

/*
//Default values
const arr = [8,9];
const[a,b,c] = arr;
console.log(a,b,c); //Result: 8,9,undefined
const[x=1,y=1,z=1] = arr;
console.log(x,y,z); // Result: 8,9,1
*/

//DESTRUCTURING OBJECTS

// Fundamentals
// {} is used to destructure objects.
// const {name, openingHours, categories} = restaurant; //Since in objects the order of properties doesn't matter, so giving a gap with commas is not required here.
// console.log(name, openingHours, categories);

// Destructuring objects with changed names
// const {name:restaurantName, openingHours:hours, categories:tags} = restaurant; //changing names of the original properties
// console.log(restaurantName, hours, tags);

// Setting Default values
// const{menu = [], starterMenu:starters = []} = restaurant; // we set default values of the property by assigning the new value with an "=" sign.
// // Mind it there's no property named "menu" but still we can assign a value to it if not then it will give "undefined"
// console.log(menu, starters);

// // Mutating variables
// let a = 11;
// let b = 20;
// const obj = { a: 23, b: 7, c: 12 };
// console.log(a, b); // 11, 20
// // But we want the a & b's values from the obj. Therefore we need to destructure
// // let {a, b} = obj; // This is wrong! as a & b has already been declared
// // {a, b} = obj; // This is wrong! as when we start a line with curly braces, JS expects a code block. And when we cannot assign anything with an equal sign in a code block we get an error;
// ({ a, b } = obj); // 23, 7 //Correct way is to put in the brackets
// console.log(a, b);

// // Nested Objects
// // 1
// const {fri} = restaurant.openingHours; //As "fri" is an object inside "openingHours" object which is inside "restaurant" object
// console.log(fri);
// //2
// const{fri:{open, close}} = restaurant.openingHours; // As open & close are inside fri
// console.log(open, close);
// //3
// const{fri:{open:O=12, close:C=12, break:B = 12}} = restaurant.openingHours; //Setting default values too
// console.log(O, C, B);

// Destructuring a method by passing an object in the arguments
// restaurant.orderDelivery({
//   time: '10:30',
//   address: 'Shanti Para',
//   starterIndex: 2,
//   mainCourseIndex: 2,
// }); // Passing an object as an argument

// restaurant.orderDelivery({
//   address: 'Shanti Para'
// });

// THE SPREAD OPERATOR(...) It unpacks the array
//NOTE: '...' becomes Spread operator when used in the right hand side
// //fundamentals
// const arr = [4, 5, 6];
// //Bad way
// const badNewarr = [1, 2, 3, arr[0], arr[1], arr[2]]; //Result: [1,2,3,4,5,6] // This is an old way to fill an array
// console.log(badNewarr);
// //Good way
// const goodNewArr = [1, 2, 3, ...arr]; // Spread operator unpacks the elements from the array
// console.log(goodNewArr);
// //Note: dont do [1,2,3, arr]; // Result: [1,2,3,[4,5,6]]; which we dont want
// console.log(...goodNewArr); //Result: 1,2,3,4,5,6

//Example
// const newMenu = [...restaurant.mainMenu, 'Chicken Tikka']; // This is a new array and not a manipulation to the mainMenu property
// console.log(newMenu);

//NOTE: Now, the big difference is that the spread operator takes all the elements from the array
//and it also doesn't create new variables. And as a consequence, we can only use it
//in places where we would otherwise write values separated by commas.

// // Copy Array
// const copyArr = [...restaurant.categories];
// console.log(copyArr);

// // Join Array
// const joinArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinArr);

//NOTE: We can use "Spread operators only on Iterables(Arrays, strings, sets & maps)"

//Strings
// const str = 'Alok Kumar Giri';
// const strArr = [...str];
// console.log(strArr); // Result: ['A', 'l', ...]
// console.log(str); // Result: Alok Kumar Giri
// console.log(...str); //Result: A l o k  K u m a r  G i r i
//IMPORTANT NOTE
// console.log(`${...str}`); //ERROR
//what we can't do is to use this to build a string using a template literal. So here, this is not gonna work.
//And that's because this is not a place that expects multiple values separated by a comma. So you see unexpected token, all right?
//So again, multiple values separated by a comma are usually only expected when we pass arguments into a function,
//or when we build a new array. So take note of that, because that is important to understand about the spread operator.

// Using spread operator in function arguments
// const ingredients = [prompt('ing1'),prompt('ing2'),prompt('ing3')];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Old way
// restaurant.orderPasta(...ingredients); //New way

//Objects (Using spread operator in objects)
// const newRestaurant = {foundedIn:1991, ...restaurant, foundedBy:'Alok'}
// console.log(newRestaurant);

//Creating shallow copy of an Object without using dot operator i.e. object.assign
// const newRestaurant2 = {...newRestaurant};
// console.log(newRestaurant2);
// newRestaurant2.foundedIn = '1990';
// console.log(newRestaurant2);
// console.log(newRestaurant);

// REST OPERATOR(...) & PARAMETERS (Rest operator packs elements into an array)
//NOTE: '...' becomes Rest operator when used in the left hand side

//Destructuring Assignments
//Fundamentals
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others); // [1,2,[3,4,5,6]]; i.e packs the elements in the array

//Using rest & spread operator together
// const [Focaccia, , Garlic, ...otherMenu] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ]; // Since the rest operator doesn't include the skipped element, it needs to be placed at last after mentioning all the variables in the destructuring assignment.
// console.log(Focaccia, Garlic, otherMenu); //Otherwise how JS will know until when it should collect the rest of the array, right!
//Note: There can be only one rest operator in any destructuring assignment.

//Rest operator in Objects
//Note: RO works same in the objects the only difference is it collects all the remaining elements and put it in an Object
// const { sat: weekend, ...weekdays } = restaurant.openingHours; //Destructuring objects using rest operator
// console.log(weekend, weekdays);

// Rest operator in Functions
//Fundaments
// const add = function(...numbers){
//   console.log(numbers);
// }
// add(2,4); //[2,4]
// add(5,6,7,8); //[5,6,7,8]
// const add = function (...numbers) {
//   //this '...numbers creates an array'
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 4);
// add(5, 4, 6);
// const x = [2, 3, 4, 5];
// add(...x); //14 //Used spread operator here to expand the nos.

//Using Rest operator in functions
// restaurant.orderPizza('Mushrooms', 'Onion', 'Tomato'); // Mushrooms [Onion, Tomato]
// restaurant.orderPizza('Mushrooms'); // Mushrooms [] Note: the parameter if not passed in the rest operator then it creates an empty array
//NOTE: So the spread operator is used where we would otherwise write values, separated by a comma.
//On the other hand the rest pattern is basically used where we would otherwise write variable names separated by commas.

// SHORT CIRCUITING
// '||' and '&&' operators can take any data-type, return any data-type and not just boolean & short-circuit
// console.log(3 || 'Alok'); // 3
// short-circuit of OR operator: short circuiting means that if the first value is a truthy value,
// it will immediately return that first value.
// if the first operand is truthy here in the OR operator,then the other operand will not even be evaluated.
// So JavaScript will not even take a look at it. And so that's what we mean with short circuiting.
// console.log('' || 'Alok'); //Alok
// console.log(0 || 'true'); //true
// console.log(undefined || null); //null if both are falsy value then the last falsy value is logged
// console.log(undefined || '' || 0 || 'Alok' || 23); //Alok as it is the first truthy value
// console.log(''||0);
// console.log(0||'');
//Practical example of OR operator
// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests?restaurant.numGuests:10;
// console.log(guest1);
// // we can replace the ternary operator or if else statement with '||' operator
// const guest2 = restaurant.numGuests||10;
// console.log(guest2);

// '&&' Operator
// console.log(0 && 'Alok'); //0 thats because what this means is that the AND operator short circuits,
//when the first value is falsy. And then immediately returns that falsy value without even evaluating the second operand.
// But if both are truthy then it returns the second value
// console.log(7 && 'Alok'); // Alok
// console.log('Hello' && 23 && null && true); //null as null is the first falsy value

//Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Onions');
// }
// We can write this way too with the help of AND operator
// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Onions');

// NULLISH COELISHING OPERATOR (??)
// This is helpful when we need 0 as a truthy value in an OR operator
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest); //10 but we need 0
// const guestCorrect = restaurant.numGuests ?? 10; //0  Using Nullish Coelishing operator
// const guestCorrect = 10 ?? restaurant.numGuests; //10 as ?? acts like a OR operator
// console.log(guestCorrect);
// Note: if null or undefined it will go on to read next values

// LOGICAL ASSIGNMENT OPERATOR
// const rest1 = {
//   name: 'Alok',
//   // numGuest: 20
//   numGuest: 0,
// };
// const rest2 = {
//   name: 'Ankit',
//   foundedIn: 1991,
// };
//Using OR operator
// rest1.numGuest = rest1.numGuest||10;
// rest2.numGuest = rest2.numGuest||10;
//The above can also be written as Using logical operator
// rest1.numGuest||=10;
// rest2.numGuest||=10;
// Nullish Coelshing Operator
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
// AND Operator
// rest2.name &&= '<Anonymous>'; //Changing name with
// // console.log(rest1);
// console.log(rest2);

//Coding Challenge-1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// LOOPING ARRAYS: THE FOR-OF LOOP
//Fundamentals
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// for(let item of menu){
//   console.log(item); // It logs each element of the menu array
// } // It gave current element

//Now how to get current index
// for(let item of menu.entries()){ //menu.entries creates array of an index and the element
//   console.log(`${item[0]+1}: ${item[1]}`);
// }
// Now since we learned destructuring
// for(let[i, el] of menu.entries()){
//   console.log(`${i+1}:${el}`);
// }

// OBJECT LITERALS (The curly bracket closing the object)

//OPTIONAL CHAINING
// if (restaurant.openingHours.mon) {
//   restaurant.openingHours.mon.open; //Error as restaurant.openingHours.mon is undefined & undefined.open is error
// if (restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }
// if (restaurant.openingHours && restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }
//Note:now imagine that opening hours here would also be optional.Or in other words that maybe the restaurant object
//can also not have opening hours.So, in this case, we would have to check for both, right? So we would have to do
//if restaurant.openingHours exists and if restaurants.openingHours.mon exists while only then unlock the opening hours to the console.
//And this can get out of hand pretty quickly when we have deeply nested objects with lots of optional properties.
//and sometimes that happens in the real world. And so therefore ES2020 introduced a great solution for this,
//which is a feature called optional chaining. And with optional chaining,if a certain property does not exist,
//then undefined is returned immediately.And so that will then avoid that kind of error that we saw earlier.And this is how it works.

// console.log(restaurant.openingHours.mon?.open); // Undefined as it checks if restaurant.openingHours.mon exists if not then it returns undefined

// Multiple optional chaining
// console.log(restaurant.openingHours?.fri?.open);

//Example
// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'fri', 'sat', 'Sun'];
// for(let day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; //Using Nullish coelishing operator instead of || operator so that it reads 'sat' value of 0
//   console.log(`On ${day} we open at ${open}`);
// };

//Optional chaining on Methods
// console.log(restaurant.order?.(0,1) ?? 'Method doesnt exist'); // Checking if the method exists
// console.log(restaurant.menu?.(0,1) ?? 'Method doesnt exist');

//Optional chaining on Arrays
// const users = [{name:'Alok', year:1992},0];
// console.log(users[0]?.name ?? 'users array empty'); // Alok

// LOOPING OBJECTS: OBJECTS KEYS, VALUES & ENTRIES

//Looping over properties of object they are also called keys
// const properties = Object.keys(openingHours); // Object.keys convert the properties of the object to an array which can be looped later
// console.log(properties);
// console.log(`We are open on ${properties.length} days`); //We are open on 3 days
// let openStr = `We are open on ${properties.length} days: `;
// for (let day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

//Looping over Property values of object they are also called values
// const values = Object.values(openingHours);
// console.log(values);

// Looping over entire object
// const entries = Object.entries(openingHours); // [Thu, {...}]
// console.log(entries);
// for(let [key, {open, close}] of entries){
//   console.log(`On ${key} we are open at ${open} & close at ${close}`);
// }

// Coding challenge-2

// SETS
// Sets can take all data types & like array, sets are also iterables also the order of elements in sets are irrelevant like objects
// const orderSet = new Set(['Pizza', 'Pasta', 'Noodles', 'Pizza', 'Pasta']);
// console.log(orderSet.size); // 3 (In array: length; Sets: size)
// console.log(orderSet.has('Pizza')); //true (In array: includes; Sets: has)
// console.log(orderSet.has('CBM')); //false
// console.log(orderSet.add('CBM')); //'Pizza', 'Pasta', 'Noodles','CBM'
// console.log(orderSet.delete('CBM')); //true
// console.log(orderSet); // 'Pizza', 'Pasta', 'Noodles'

// const firstName = new Set('Alok');
// console.log(firstName); //'A','l'...
//NOTE:In sets there are actually no indexes.And in fact, there is no way of getting values out of a set. And if we think about this,
//then it makes sense.So there's really no need for getting data out of a set. That's because if all values are unique,
//and if their order does not matter,then there is no point of retrieving values out of a set.

//Looping a set
// for (let order of orderSet) {
//   console.log(order);
// }

//Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const uniqueStaff = [...new Set(staff)]; //putting inside an array using spread operator
// console.log(uniqueStaff);

// MAP:FUNDAMENTALS

// NOTE: a map is a data structure that we can use to map values to keys. So, just like an object data is stored in key value pairs in maps.
//Now, the big difference between objects and maps is that in maps, the keys can have any type and this can be huge.
//So, in objects, the keys are basically always strings. But in maps, we can have any type of key.It could even be objects, or arrays, or other maps.

// const rest = new Map();
// rest.set('name', 'Chipoong'); //set is used to map the keys and the values
// rest.set(1, 'Shanti Para');
// console.log(rest.set(2, 'Pradeep Sangha Lane')); // It shows the entire map not just with 2

// //set chaining in map
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 10)
//   .set('close', 20)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest);
// console.log(rest.get('name')); //Chipoong
// console.log(rest.get('1')); //undefined as '1' is a string here where as it should be number 1
// const time = 15;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //Map methods
// console.log(rest.has('categories')); //true
// console.log(rest.size); //8
// console.log(rest.delete(2));
// console.log(rest);

// //Using objects as keys this will be useful when using DOM elements
// const arr = [1,2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// console.log(rest.set(document.querySelector('h1'),'Heading'));

// MAP ITERATION
// We can create a new Map without using set by creating arrays inside the array
// const quiz = new Map([
//   ['Question', 'Which is the best programming language?'],
//   [1, 'Java'],
//   [2, 'JavaScript'],
//   [3, 'Python'],
//   ['correct', 2],
//   [true, 'Correct'],
//   [false, 'try again'],
// ]);
// console.log(quiz);

// //Convert Object to Map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Iteration
// console.log(quiz.get('Question'));
// for(let[key, value] of quiz){
//   if(typeof key === 'number'){ // Remeber we have used 'number' to compare and not Number
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('What\'s the answer?'));
// const answer = 2;
// console.log(answer);
// console.log(quiz.get('correct')===answer?quiz.get(true):quiz.get(false));
// console.log(quiz.get(quiz.get('correct')===answer));

// //Converting Map to Array
// console.log(...quiz);
// console.log(quiz.entries());
// console.log(quiz.values());
// console.log(quiz.keys());

//WHEN & WHICH DATA STRUCTURE TO USE IN MAP, SETS & ARRAYS

//STRINGS-1
//Fundamentals
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]); //A
// console.log('A320'[0]); //A
// console.log(plane.length); //4 //Finding string size
// console.log('A320'.length); //4

// //String methods
// console.log(airline.indexOf('r')); // 6  // It finds the index of the first occurance
// console.log(airline.lastIndexOf('r')); // 10 It finds the index of the last occurance
// console.log(airline.indexOf('Portugal')); // 8
// console.log(airline.indexOf('portugal')); // -1 as it is case sensitive it considers it to be no such word
// console.log(airline.indexOf('Alok')); // -1

// // Slicing /extraction of some part of the string
// console.log(airline.slice(4)); // Air Portugal //'A' is the 4th letter from which it will start
// console.log(airline.slice(4, 7)); //Air //'A' is 4th letter & it will end at the 6th letter
// console.log(airline.slice(0, airline.indexOf(' '))); //TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal
// console.log(airline.slice(-2)); // 'al' these are the last two letters
// console.log(airline.slice(1,-1)); // 'AP Air Portuga'

// //Example (Checking plane's middle seat)
// const checkMiddleSeat = function(seat){
//   const s = seat.slice(-1);
//   if(s === 'B' || s==='E'){
//     console.log('You got a middle seat');
//   }else{
//     console.log('You got a corner seat');
//   }
// }

// checkMiddleSeat('11B'); //'You got a middle seat'
// checkMiddleSeat('23C'); //'You got a corner seat'
// checkMiddleSeat('10E'); //'You got a middle seat'

//NOTE: So we know that strings are just primitives.So why do they have methods? Shouldn't methods only be available
//on objects such as a arrays? Well that is actually true. However, JavaScript is really smart. And so here is how this works.
//Whenever we call a method on a string,JavaScript will automatically behind the scenes convert that string primitive to a string object
//with the same content.And then it's on that object where the methods are called.All right and this process is called boxing
//because it basically takes our string and puts it into a box which is the object. After all the operation done, string object is converted back to string primitive.

//STRINGS-2
// const firstName = 'aLOk';
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// //Fix Name correction
// const passenger = 'aNkIt';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// //Converting into a function
// const correctName = function(name){
// const lowerName = name.toLowerCase();
// const rightName = lowerName[0].toUpperCase() + lowerName.slice(1);
// console.log(rightName);
// }
// correctName('ajAY');
// correctName('soBHA');

//Comparing Emails
// const email = 'alokgiri12@gmail.com';
// const loginEmail = '   ALOKGIRI12@gmail.com  \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // We can avoid this step by chaining
// console.log(trimmedEmail);
// const correctEmail = loginEmail.toLowerCase().trim(); //Trim delets all the empty spaces from start & after end
// console.log(correctEmail);
// const firstName = '     Alok Kumar Giri    ';
// const trimmed = firstName.trim();
// console.log(trimmed); // 'Alok Kumar Giri'

//Replacing
// const priceGB = '233,87&';
// const priceUS = priceGB.replace('&', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding at door no. 23. door no.23!';
// console.log(announcement.replaceAll('door', 'gate')); //'replaceAll' method replaces all the same word with the new word

//Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); //true
// console.log(plane.startsWith('Air')); //true

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//   console.log('It is part of the lastest Airbus family');
// }

//Practical example
// const checkBaggage = function (items) {
//   const lowerItems = items.toLowerCase();
//   if(lowerItems.includes('knife') || lowerItems.includes('gun')){
//     console.log('Passenger not allowed');
//   }else{
//     console.log('Happy Journey');
//   }
// };
// checkBaggage('I have a Laptop, Food, and a pocket Knife');
// checkBaggage('socks & Camera');
// checkBaggage('Got some snacks & a gun for protection');

//STRINGS-3
//Split strings: It splits the string and put it in an array
// console.log('Alok Kumar Giri'.split(' ')); //['Alok', 'Kumar', 'Giri']

//Destructuring using split method
// const [firstName, lastName] = 'Alok kumarGiri'.split(' ');
// console.log(firstName, lastName);

//Join method (Opposite of Split)
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

//Practical Example (Create a function to capitalize each Name)
// const capitalizeName = function (name) {
//   const names = name.split(' '); //created an array
//   const nameArray = [];
//   for (let n of names) {
//    nameArray.push(n[0].toUpperCase() + n.slice(1));
//     //nameArray.push(n.replace(n[0], n[0].toUpperCase())); //Another way
//   }
//   console.log(nameArray.join(' '));
// };
// capitalizeName('alok kumar giri');

//Padding a string
// const message = 'I love You';
// console.log(message.padStart(25, '#').padEnd(30, '$')); // ###############I love You$$$$$ //25 is the total no. of elements we want & '#' is used to fill the gap before the start. Vice a versa for padend

//Practical example(Masking credit card)
// const maskingCC = function (number) {
//   const cc = number + ''; //First converting into strings
//   const last = cc.slice(-4); //Extracting the last 4 digit-strings
//   return console.log(last.padStart(8, '*'));
// };
// maskingCC(12345678); //****5678
// maskingCC('87654321'); //****4321

//Repeat Method
// const message2 = 'I love You';
// console.log(message2.repeat(5)); // the no. represents how many times you want it to get repeated

//Coding Challenge-4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (let [i,row] of rows.entries()) {
//   const [first, second] = row.toLowerCase().trim().split('_');
//   const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
//   console.log(`${output.padEnd(20)}${'$'.repeat(i+1)}`);
//   }
// });

// Practice Coding Challenge
/*
Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored!`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//7
team1 < team2 && console.log('team1 is more likely to win');
team2 < team1 && console.log('team2 is more likely to win');

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1.  Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2.  Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3.  Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4.  Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1, Hummels: 1, Lewandowski: 2
}
*/

//1
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average = average + odd;
}
average = average / odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1.  Create an array 'events' of the different game events that happened (no duplicates)
2.  After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3.  Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4.  Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
⚽
GOAL
[FIRST HALF] 17: GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  const position = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${position} HALF] ${min}: ${event}`);
}

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces): 
underscore_case
  first_name
Some_Variable 
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs): 
underscoreCase     ✅
firstName          ✅✅ 
someVariable       ✅✅✅ 
calculateAge       ✅✅✅✅ 
delayedDeparture   ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
});
