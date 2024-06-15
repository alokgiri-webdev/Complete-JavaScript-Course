'use strict';
// CONSTRUCTOR FUNCTION & THE 'NEW' OPERATOR

// const Person = function (firstName, birthyear) {
// variables of constructor functions always starts with capital letters
// console.log(this); // Person {} as mentioned below empty object is created by the new operator and this keyword pointing to the created object
// Instance Properties below
// this.firstName = firstName;
// this.birthyear = birthyear;

/*NEVER DO THIS i.e creating a Method inside a constructor function That's because imagine we were gonna create a hundred or thousands or even tens of thousands of person objects using this constructor function.
Then what would happen, is that each of these objects would carry around this function here. So if we had a thousand objects, we would essentially create a thousand copies
of this function. And so that would be terrible for the performance of our code. But instead to solve this problem, we are gonna use prototypes and prototype inheritance.
*/
//   this.calcAge = function () {
//     console.log(2024 - this.birthyear);
//   };
// }; // This can be seen as a blueprint
// const alok = new Person('Alok', 1992); // 'new' is the opeartor used to call the constructor function but it does more than that.
// console.log(alok); // Person {firstName: 'Alok', birthyear: 1992} // This can be seen as a house built on that blueprint or it is also called instance
// The 'new' operator does 4 things-
/*
1. New {} is created 
2. function is called, this keyword -> {}
3. {} is linked to a prototype
4. function automatically return {}
*/
// Now we can build or create multiple similar objects using this one constructor function
// const ankit = new Person('Ankit', 1997);
// const sobha = new Person('Sobha', 1972);
// //Checking instance of constructor function
// console.log(alok instanceof Person); // true
// console.log(ankit instanceof Person); // true

// PROTOTYPES
/* NOTE: So, first each and every function in JavaScript automatically has a property called prototype. And that includes, of course, constructor functions.
Now every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.
*/

// Person.prototype.calcAge = function () {
//   // We added 'calcAge function' to the Person's prototype object so that all its instances can inherit this method.
//   console.log(2024 - this.birthyear);
// };
/* Note: Now there exists only one copy of this function.So only one of them exists, but then all of the objects that are created
using this constructor function can basically reuse this function on themselves. And so, the disc keyword, of course, in each of them
is as always set to the object that is calling the method.
*/
// console.log(Person.prototype); //{calcAge: ƒ, constructor: ƒ}

// alok.calcAge(); // 32  Now alok had only two properties of firstName & birtyear but still is able to use calcAge function is because of prototypical inheritance

// console.log(alok.__proto__);
// console.log(alok.__proto__ === Person.prototype); //true
// Note: Person.prototype here is actually not the prototype of Person. But instead, it is what's gonna be used as the prototype of all the objects that are created with the Person constructor function.
/* NOTE: Now, anyway, where does this proto, property here, on the alok object actually come from? Well, remember the 'new' operator that we talked about before,
well, it contains this step number three which links the empty new object to the prototype. And so basically, it is this step number three which will create this proto property.
So it creates this proto property and it sets its value to the prototype property of the constructor function. And so this is how JavaScript knows internally that the alok object is connected to Person.prototype.
*/

//We can not only add method but also properties to the prototype object
// Person.prototype.species = 'Homo Sapiens';
// console.log(alok.species); // Homo Sapiens

//We can check which property is alok's/object's/instance's n which not
// console.log(alok.hasOwnProperty('firstName')); // true
// console.log(alok.hasOwnProperty('species')); // false Thats because it doesnt have directly on the alok's object but in its prototype from where it inheritates

// PROTOTYPAL INHERITANCE & PROTOTYPE CHAIN
// console.log(alok.__proto__.__proto__); // This is object.prototype
// Top of Prototype chain
// console.log(alok.__proto__.__proto__.__proto__); //null

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
// const arr = [1, 2, 2, 4, 4]; // new Array === []  arr is a instance of Array constructor function
// console.log(arr.__proto__); // arr itself doesnt contains all the methods but it inherits from its prototype
// console.log(arr.__proto__ === Array.prototype); //true

// Note: We should however avoid doing this below
// Array.prototype.unique = function(){ /* we added a new method to the prototype property of the array constructor.And so therefore now all arrays will inherit this method.
// And so we can then call that method on any array that we want. */
//   return [...new Set(this)];
// }
// console.log(arr.unique()); // [1,2,4];

// console.dir(
//   x => x + 1
// );
/*the function itself is also an object. And so therefore, it also has a prototype. And in this case to prototype will then contain the methods
that we have used previously on functions. So that's apply, bind and call, remember. And so once again this is the reason why we can actually
call methods on functions. It's because they are objects and objects have prototypes. And in this case, this function prototype */

// CODING CHALLENEGE-1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at a ${this.speed} km/hr`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at a ${this.speed} km/hr`);
// };

// const bmw = new Car('BMB', 40);
// console.log(bmw);

// bmw.accelerate();
// bmw.brake();

// ES6 CLASSES way of constructor function

// This is a class expression
// const Carcl = class { // Without passing arguments

// }

// This is a class declaration
// class Carcl {                 // Declaring a class
//   constructor(make, speed){   // Following class we create constructor function
//     this.make = make;
//     this.speed = speed;
//   }
//   // Methods will be added to the prototype property of the class as it is wriiten outside the constructor function but inside the class function
//   accelerate(){
//     this.speed += 10;
//     console.log(`${this.make} is going at a speed of ${this.speed}`);
//   }
//   brake(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at a speed of ${this.speed}`);
//   }
// }

// const bmw = new Carcl('BMW', 120);
// console.log(bmw);
// bmw.accelerate();
// bmw.brake();

/* NOTE: Importhings to know about class
 1. Classes are not Hoisted
 2. Classes are first-class citizens
 3. Classes are executed in strict-mode
*/

// SETTERS & GETTERS
// Note: All objects in JavaScript have setter & getter properties. And these special properties are called as assessor properties. While other regular properties are called data properties

// const account = {
//   owner: 'Alok',
//   movements: [200, 300, 500, 100],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest); // We don't call the method but simply call as a property

// account.latest = 50; // Since latest is treated as a property under set, so the value is set how in properties is set
// console.log(account.movements); // [200, 300, 500, 100, 50]

// // Example
// class Carcl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at a speed of ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at a speed of ${this.speed}`);
//   }
//   get highSpeed() {
//     return (this.speed += 10);
//   }

//   // Set a property that already exists
//   set make(name) {
//     if (name.includes(' ')) {
//       this._make = name;
//     } else {
//       alert('This is not a correct name');
//     }
//   }
// }

// const bmw = new Carcl('BMW Mercedes', 120); //Carcl {_make: 'BMW Mercedes', speed: 130} make is changed to _make
// console.log(bmw.highSpeed); // 130
// console.log(bmw);

// STATIC METHODS

//Array.from()
// [1,2,3].from()
/* We can't do this And so that is because this 'from method' here is really attached to the entire constructor, so the Array constructor
and not to the prototype property of the constructor. */

// const Person = function (firstName, birthyear) {
//   this.firstName = firstName;
//   this.birthyear = birthyear;
// };
// new Person();

// Person.hey = function () {  // hey is a static method here
//   console.log('Hello Alok');
// };
// Person.hey(); //Hello Alok

// const alok = new Person('Alok', 1992);
// console.log(alok); //Person {firstName: 'Alok', birthyear: 1992}
// alok.hey(); // alok.hey is not a function because hey is attached to the constructor function and not to its prototype property for the variable alok to access it

//How to use static method in a class
// class Carcl {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }

//     // Instance methods
//     accelerate() {
//       this.speed += 10;
//       console.log(`${this.make} is going at a speed of ${this.speed}`);
//     }
//     brake() {
//       this.speed -= 5;
//       console.log(`${this.make} is going at a speed of ${this.speed}`);
//     }

//     // Assessor properties
//     get highSpeed() {
//       return (this.speed += 10);
//     }

//     // Set a property that already exists
//     set make(name) {
//       if (name.includes(' ')) {
//         this._make = name;
//       } else {
//         alert('This is not a correct name');
//       }
//     }

//     // Static methods
//     static hey(){
//       console.log('Hello!');
//     }
//   }

//   Carcl.hey(); // Hello!

// OBJECTS.CREATE
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthyear);
//   },
//   init(firstName, birthyear) {
//     this.firstName = firstName;
//     this.birthyear = birthyear;
//   },
// };

// const alok = Object.create(PersonProto);
// // alok('Alok', 1992);
// alok.firstName = 'Alok';
// alok.birthyear = 1992;
// alok.calcAge(); // 32
// const ankit = Object.create(PersonProto);
// ankit.init('Ankit', 1997);
// console.log(ankit);
// ankit.calcAge();

// CODING CHALLENGE - 2

// INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTION
// const Person = function (firstName, birthyear) {
//   this.firstName = firstName;
//   this.birthyear = birthyear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthyear);
// };

// const Student = function (firstName, birthyear, courseName) {
//   Person.call(this, firstName, birthyear);
//   this.courseName = courseName;
// };

// // We want Student(child) to inherit all the methods from its Person(Parent)
// Student.prototype = Object.create(Person.prototype); // This should be done before we set any method on Student's prototype's property

// Student.prototype.introduce = function () {
//   console.log(`${this.firstName} is studying in ${this.courseName}`);
// };

// const alok = new Student('Alok', 1992, 'SoftwareDev');
// console.log(alok);
// alok.calcAge();
// alok.introduce();

//CODING CHALLENGE - 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function(){
// this.speed += 10;
// }

// Car.prototype.brake = function(){
// this.speed-= 5;
// }

// const ElectricCar = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// ElectricCar.prototype = Object.create(Car.prototype);

// ElectricCar.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// ElectricCar.prototype.accelerate = function () { // Due to Polymorphisim, this accelerate(Child's) can override Car's(Parent's) accelerate
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/hr, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new ElectricCar('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate(); // This is possible due to Polymorphisim

// INHERITANCE BETWEEN "CLASSES": ES6 CLASSES
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }
//   brake() {
//     this.speed -= 5;
//   }
// }

// class EV extends Car {
//   // here extends keyword let the child(EV) inherit Parent's(Car's) prototype
//   constructor(make, speed, charge) {
//     super(make, speed); // here super keyword inherits the constructor properties & set the 'this' keyword
//     // Therefore, super keyword should be written at the top
//     this.charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/hr, with a charge of ${this.charge}%`
//     );
//     return this;
//   }
// }

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();

// INHERITANCE BETWEEN "CLASSES": OBJECTS.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthyear);
//   },
//   init(firstName, birthyear) {
//     this.firstName = firstName;
//     this.birthyear = birthyear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// // Overwriting the init function for StudentProto(Child)
// StudentProto.init = function(firstName, birthyear, courseName){
// PersonProto.init.call(this, firstName, birthyear);
// this.courseName = courseName;
// }
// const alok = Object.create(StudentProto);
// alok.init('Alok', 1992, 'Computer Science');
// console.log(alok);
// alok.calcAge();

// ANOTHER CLASS EXAMPLE
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;

//     // We can pass multiple properties without passing any arguments
//     this.movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account with us ${this.owner}`);
//   }
//   //Now adding methods to deposit & withdraw cash for movements
//   // These are Public interface to our objects
//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   approveLoan(val){
//     return true;
//   }
//   requestLoan(val){
//     if(this.approveLoan(val)){
//         this.deposit(val);
//         console.log(`Loan Approved`);
//     }
//   }
// }

// const acc1 = new Account('Alok', 'INR', 1111);
// acc1.deposit(100);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);

//ENCAPSULATION: PROTECTED PROPERTIES & METHODS
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     //Protected Property
//     this._pin = pin; // Underscore helps to let know that this properties are not to be touched outside the class and these are not part of Public API but rest are
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account with us ${this.owner}`);
//   }

//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   _approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//     }
//   }
// }

// const acc1 = new Account('Alok', 'INR', 1111);
// acc1.deposit(100);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements()); // We can see the movements but not manipulate
// console.log(acc1);

// ENCAPSULATION: PRIVATE CLASS FIELDS & METHODS

/* 1. Public fields
   2. Private fields
   3. Public methods
   4. Private methods
*/
// class Account {
//     //Note: About Public & Private fields (These will be compulsorily present in all the instances created out of this class) 
//     // Mind it it doesn't require any declaration with const or let. // They are also refernceable with the this keyword
    
//     // 1. Public fields 
//     locale = navigator.language; 
//     // 2. Private fields (They are denoted by # in the beginning)
//     #movements = [];
//     #pin; // As it has an argument
//     constructor(owner, currency, pin) {
//       this.owner = owner;
//       this.currency = currency;
//       this.#pin = pin;
//     //   this._movements = [];
//     //   this.locale = navigator.language;
//       console.log(`Thanks for opening an account with us ${this.owner}`);
//     }
    
//     // 3. Below are Public Methods
//     getMovements() {
//       return this.#movements;
//     }
//     deposit(val) {
//       this.#movements.push(val);
//     }
//     withdraw(val) {
//       this.deposit(-val);
//     }
//     _approveLoan(val) {
//       return true;
//     }
//     requestLoan(val) {
//       if (this._approveLoan(val)) {
//         this.deposit(val);
//         console.log(`Loan Approved`);
//       }
//     }
//   }
  
//   const acc1 = new Account('Alok', 'INR', 1111);
// acc1.deposit(100);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements()); // We can see the movements but not manipulate
// // console.log(acc1.#movements); // shows error and restricting from accessing as it is declared as a private field
// console.log(acc1);

// CODING CHALLENGE - 4
class Car {       
    constructor(make, speed){
    this.make = make;
    this.speed = speed;
    }

    accelerate(){
        this.speed+=10;
         return this;
    }
    brake(){
        this.speed-=5;
        return this;
    }
}

class EV extends Car{
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo){
    this.#charge = chargeTo;
    return this;
    }
    accelerate(){
    this.speed += 20;
    this.#charge--;
    console.log(
            `${this.make} is going at ${this.speed} km/hr, with a charge of ${this.#charge}%`
          );
    return this;
    }
}

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(90).accelerate();
console.log(tesla);