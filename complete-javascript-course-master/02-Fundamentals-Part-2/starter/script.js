'use strict'; //Writing this statement in the very begining let the entire code in a strict mode
// i.e. now the JS will strict us from doing certain things and also make the bugs visible which otherwise would have led the JS fail silenetly
/*
//FUNCTIONS
function logger(){
    console.log("I am Alok");
}

logger(); //calling a function

function fruitprocessor(apples, oranges){ //apples & oranges are parameters
const juices = `I had juice of ${apples} Apples & ${oranges} Oranges`;
return juices;
}

const newJuice = fruitprocessor(5,0); //5,0 are arguments
console.log(newJuice);

//NOTE: Functions help us to keep the code DRY(Dont Repeat Yourself)
//Functions help us to return the entire code without writing the same code again n again by only mentioning the function name
*/
/*
//FUNCTION DECLARATION VS EXPRESSIONS

//Function declaration
const age_1 = calcAge1(1992); // Function can be called before declaration
console.log(age_1);

function calcAge1(birthyear){
    return (2037-birthyear);
}


//function expression
const calcAge2 = function(birthyear){ //function can also be a value and so can be put in a variable
    return (2037-birthyear);
}
const age_2 = calcAge2(1992); // Function cant be called before initialization unlike in function declaration
console.log(age_2);

//NOTE: A developer should know both but can use anyone in which he is comfortable.
*/
/*
//ARROW FUNCTION
//function expression
const calcAge2 = function(birthyear){ 
    return (2037-birthyear);
}
//Arrow function
//category-1
const calcAge3 = birthyear => 2037-birthyear; // when we have 1 parameter and one line of code to return
const age3 = calcAge3(1992);
console.log(age3);
//category-2
const yearsUntilRetirement = birthyear =>{ //When we have 1 parameter but multiple line of code we open curly bracket
    const age4 = 2037-birthyear;
    const retirementAge = 65;
    return retirementAge-age4;
}
console.log(yearsUntilRetirement(1992));
//category-3
const yearsUntilRetirement2 = (birthyear,firstName) =>{ //When we have more than 1 parameter but multiple line of code we open curly bracket
    const age5 = 2037-birthyear;
    const retirement = 65-age5;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement2(1992,"Alok"));

//NOTE: Do not use Arrow function where you need to use "This" keyword
*/
/*
//FUNCTIONS CALLING FUNCTIONS
function cutFruitPieces(fruit){
    return fruit*4
}

function fruitprocessor(apples, oranges){
    const applePieces = cutFruitPieces(apples); //Calling another function in a function
    const orangePieces = cutFruitPieces(oranges);
    const juices = `I had juice of ${applePieces} Apples & ${orangePieces} Oranges`;
    return juices;
    }
console.log(fruitprocessor(4,2));
*/
/*
//REVIEWING FUNCTION
const calcAge = function(birthyear){
    return 2037-birthyear;
}
const yearsUntilRetirement2 = function (birthyear,firstName) { 
    const age5 = calcAge(birthyear);
    const retirement = 65-age5;
    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`); // This will be executed because the console log is above the return
        return retirement;
    }else{
        return -1;
        console.log(`${firstName} is already retired`); // This will not be executed because as soon as return is executed it exits the function.
    }
}
console.log(yearsUntilRetirement2(1969,"Alok"));
*/
/*
//INTRO TO ARRAYS
const friend1 = "Alok";
const friend2 = "Ankit";
const friend3 = "Ajay";

const friends = ["Alok", "Ankit", "Ajay"]; //1 way to write the array
console.log(friends);

const y = new Array(1992, 1997, 1969); //Another way to write the array
console.log(y);

console.log(friends[0]); // Alok: Array starts with 0th element
console.log(friends.length); // 3 it gives the value of the total no. of elements
console.log(friends[friends.length-1])// Inside square bracket expression can be used. And this way we can find the right most element

friends[2] = "Sobha";
console.log(friends); //Ajay is replaced by Sobha and this is possible instead of using "const" because JS allows some of the elements to change inside the Array
// But one cannot change the entire array as that is not allowed.
//friends = ["Rati", "Kanhaiya"];
//console.log(friends); // It throws error.

const firstName = "Alok";
const Alok = [firstName, "Giri", 2037-1992, friends];
console.log(Alok);

//Excercise
const calcAge = function(birthyear){
    return 2037-birthyear;
}
const years = [1990, 1992, 1995];
const age1 = calcAge(years[0]);
const age2= calcAge(years[years.length-1]);
const ages = [age1, age2];
console.log(ages);
*/
/*
//BASIC ARRAY OPERATIONS(METHODS)
const friends = ["Alok", "Ankit", "Ajay"];
//For adding element at the last of the array
//Push
friends.push("Sobha"); // In order to find the new length of the array, we can const newLength = friends.push("Shobha"); console.log(friends);--> 4
console.log(friends); 
//For adding element at the start of the array
//unshift
friends.unshift("Rati_Devi");
console.log(friends);
//For removing element from the last of the array
//pop
friends.pop(); // In order to find which element got shift/removed we can const popElement = friends.pop(); then console.log(friends); --> Sobha
console.log(friends);
//For removing element from the first of the element
friends.shift(); // In order to find which element got shift/removed we can const shiftElement = friends.shift(); then console.log(friends); --> Rati_Devi
console.log(friends);
//Finding the index of the element
console.log(friends.indexOf("Alok")); //--> 0th index
//Finding if the element exists in the array
console.log(friends.includes("Alok")); //--> true
//Note: includes function follows "strict equality"/"===" to compare/find the element.
// It doesnt follow type coercion i.e '23' will not be equal to 23 under includes function.
*/
/*
//INTRODUCTION TO OBJECTS
// Example of an Arrays
const jonas = [  //We are unable to categorize the elements. The placement of every element matters
    "Alok",
    "Giri",
    "1992",
    "Software Developer",
    ["Ankit", "Aman", "Ajay"]
]
//Example of an Object    // Objects starts with curly bracket and we are able to categorize the elements and this categories are called properties of an object
const object = {          // Placement of properties doesnt matter.
    firstName:"Alok",
    lastName:"Giri",
    birthYear:1992,
    occupation:"Software Developer",
    friends: ["Ankit", "Aman", "Ajay"]
}
*/
/*
//DOT Vs. BRACKET NOTATION
const object = {          // Placement of properties doesnt matter.
    firstName:"Alok",
    lastName:"Giri",
    birthYear:1992,
    occupation:"Software Developer",
    friends: ["Ankit", "Aman", "Ajay"]
}
console.log(object); //Properties may not be in the same order
console.log(object.lastName); // This is Dot notation to find the element
console.log(object["lastName"]); // This is a Bracket notation to find the element. It is widely use as we can put any expression inside the bracket
const nameKey = "Name";
console.log(object["first"+ nameKey]);// Alok
console.log(object["last"+ nameKey]); // Giri

// Below is how we can add aditional properties to the object 
object.location = "India";
object["instagram"] = "@alokgiri12";
console.log(object);

//Better understanding of Bracket Notation

const interestedIn = prompt("Choose any one from the following- firstName, lastName, birthYear,occupation,friends,location,instagram")
console.log(object[interestedIn]); // The input has to be the element of the object and it is case sensitive.
//Using bracket notation in conditionals
if(object[interestedIn]){
console.log(object[interestedIn]);
}else{
console.log("Wrong!");    
}
//Challenge
//"Alok has 3 friends, and his best friend is Aman"
console.log(`${object.firstName} has ${object.friends.length} friends. and his best friend is ${object.friends[1]}`);
*/
/*
//OBJECT METHODS
const object = {          
    firstName:"Alok",
    lastName:"Giri",
    birthYear:1992,
    occupation:"Software Developer",
    friends: ["Ankit", "Aman", "Ajay"],
    hasDriversLicence: true,
    //calcAge: function(birthYear){   //Function attached to an Object is called Method. Method is also a property of an object
    //    return 2037-birthyear;
    //calcAge: function(){
    //return 2037-this.birthYear; //Use of this. this points to the name of the object. We use "this" instead of the object name itself because even if in future we change the object name, still "this" will point to the new object name. 
    calcAge: function(){
        this.age = 2037-this.birthYear;
        return this.age;
    },
    getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} year old ${this.occupation}, and he has ${this.hasDriversLicence?"a":"no"} drivers license`;
    }
}
console.log(object.calcAge()); // We need to calculate the age once
//console.log(object.age); // Now this can be called as many times as required
//console.log(object); // age property is added in the object
//Calling a Method of an Object both with Dot notation & Bracket Notation
//console.log(object.calcAge());
//console.log(object["calcAge"]());

//Challenge
//"Alok is a 45 year old software developer, and he has a/no drivers license"
console.log(object.getSummary());
//NOTE: Array is also a kind of an object or can say a special type of object which has its own built in methods like, push, unshift, pop, shift etc.
*/
/*
//Code Challenge on Object Methods
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height:1.69,
    calcBMI: function(){
        this.markBMI = this.mass/(this.height*this.height);
        return this.markBMI;
    }
}
console.log(mark.calcBMI());
console.log(mark);

const john = {
    fullName: "John Smith",
    mass: 92,
    height:1.95,
    calcBMI: function(){
        this.johnBMI = this.mass/(this.height*this.height);
        return this.johnBMI;
    }
}
console.log(john.calcBMI());
console.log(john);

if(mark.markBMI>john.johnBMI){
    console.log(`${mark.fullName}'s BMI is (${mark.markBMI}) is higher than ${john.fullName}'s (${john.johnBMI})`);
}else{
    console.log(`${john.fullName}'s BMI is (${john.johnBMI}) is higher than ${mark.fullName}'s (${mark.markBMI})`);
}
*/
/*
// ITERATION: THE FOR LOOP
// LOOPING ARRAYS, BREAKING & CONTINUING
//Looping Array
const jonas = [  
    "Alok",
    "Giri",
    1992,
    "Software Developer",
    ["Ankit", "Aman", "Ajay"]
]

const types = [];

for(let i=0; i<jonas.length; i++){
    //Reading an Array
    console.log(jonas[i], typeof jonas[i]);
    // Filling an Array
    //types[i] = typeof jonas[i];
    //Another way is
    //types.push(typeof jonas[i]);
    
}
console.log(types);

const years = [1992, 1997, 1969, 1971];
const ages = [];

for(let i=0; i<years.length; i++){
    ages[i] = 2037-years[i];
}
console.log(ages);

//continue
for(let i=0; i<jonas.length; i++){
    if(typeof jonas[i] !== "string") continue; //"Continue" means skipping so the elements which are not strings will be skipped and only the strings one's will be printed 
    console.log(jonas[i], typeof jonas[i]);
}

//break
for(let i=0; i<jonas.length; i++){
    if(typeof jonas[i] === "number") break; // "break" means as soon as the condition meets, the loop will break/stop and only print only until then.
    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
//LOOPING BACKWARDS & LOOP IN LOOPS
//looping backwards
const jonas = [  
    "Alok",
    "Giri",
    1992,
    "Software Developer",
    ["Ankit", "Aman", "Ajay"]
]
for(let i= jonas.length-1; i>=0; i--){
    console.log(jonas[i]);
}
//loop in a loop
for(let excercise=1; excercise<4; excercise++){
    for(let rep=1; rep<6; rep++){
        console.log(`For ${excercise} the reps are ${rep}`);
    }
}
*/
/*
//THE WHILE LOOP (While loop is very versatile)
// We can use while loop when we dont require counter variable or dont need to move in linear manner
// We can use while loop when we need to find subjective conditions 
//Good example is suppose we need to roll a dice and roll until we achieve 6. How can we do is--
let dice = Math.trunc(Math.random()*6)+1;
while(dice!==6){
console.log(`Keep the dice rolling ${dice}`);
dice = Math.trunc(Math.random()*6)+1;
if(dice===6){
console.log(`Great`);
}
}
*/

