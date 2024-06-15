/*
let js = "Amazing";    
console.log(40+30-70);

let firstName = "Alok";
firstName = "Ankit";
console.log(firstName);

let javascript = true;
console.log(javascript);
//typeof = Gives out what type of data is it
console.log(typeof javascript); //DataType is Boolean
console.log(typeof 23);
console.log(typeof "Alok");

javascript = "Yes!";
console.log(typeof javascript); //DataType is String

let year;
console.log(year);
console.log(typeof year);
year = 1992;
console.log(year);
console.log(typeof year);
console.log(typeof null); //DataType should be Null but its a bug in Javascript which shows Object and this bug is kept like this for legacy purpose
*/
/*
//LET, CONST & VAR
let age = 30;
age = 31; //Which means let variable is mutable/changeable at later stages
console.log(age);
let lastName; //let variable allows to declare an empty value which can be later assigned.
lastName = "Ajay";
console.log(lastName);

const birthYear = 1990; //const variable is used to declare an un-mutable/constant value.
// birthYear = 1991; // const variable is non-mutable and therefore throws an error.
// const middleName; // const variable cannot be emptyvalue otherwise it will throw an error.
//NOTE: Try to use "const variable" as much as possible.

middleName = "Kumar"; // Athough it gives an result but Never ever declare a value without using a variable 
console.log(middleName); 
*/

/*
//BASIC OPERATORS
//Math Operators
const now = 2037;
const ageAlok = now - 1992;
const ageAnkit = now - 1997;
console.log(ageAlok, ageAnkit);
console.log(ageAlok*2, ageAnkit/2, 2**3); //2**3 means 2 the power 3 i.e 8
const firstName = "Alok";
const lastName = "Giri";
console.log(firstName+" "+lastName);

//Assignment Operators
let x = 10+5;
x+=10; //x = x + 10 = 25
x*=4; //x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--; // x = 99
console.log(x);

//Comparision Operators
console.log(ageAlok>ageAnkit); // <,>,<=,>=  Result: true
console.log(ageAnkit>=20); //Result: true
const isfullage = ageAnkit>=20; // We can also store value in this manner
console.log(typeof isfullage); //Type is Boolean
console.log(now-1992 > now-1997); //How JS know that it is true i.e how BODMAS is used here.
*/
/*
//OPERATOR PRECEDENCE
let x, y;
x = y = 25 - 10 - 5; // Here mathematical operators have higher precedence n are executed from left to right
// where as = operators have lower precedence and executes from right to left
//Reference MDN document
console.log(x,y);

//Code Challenge-2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark/heightMark**2;
const BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIMark,BMIJohn);

const markHigherBMI = (BMIMark>BMIJohn);
console.log(markHigherBMI);
*/
/*
//STRINGS & TEMPLATE LITERALS
const firstName = "Alok";
const birthYear = 1992;
const currYear = 2037;
const job = "Teacher";

const alokNew = `I'am ${firstName}, a ${currYear-birthYear} year old ${job}`;
console.log(alokNew);
console.log(`You can write
strings within back
comma too`);
*/
/*
//IF ELSE STATEMENTS
const age = 15;
const isOldEnough = age>=18;
if(isOldEnough){
console.log(`Sarah is eligible to drive`);
}else {
    const yearsLeft = 18-age;
    console.log(`Sarah will be eligible in ${yearsLeft} years`);
}
*/
/*
//TYPE CONVERSION & COERCION
//Type conversion
const inputYear = "1991";
console.log(Number(inputYear)); //Number converted the string into number in the output not the original
console.log(inputYear+18); // 199118
console.log(Number(inputYear) + 18); //2009
console.log(Number(inputYear), inputYear); //1991, "1991"
console.log(Number('Alok')); // NaN: which means not a number
console.log(typeof NaN); // Number: But it is an invalid no.
//Type coercion
console.log("I'am " + 23 + " year old"); // + converted the number 23 to string 23
console.log("25"-"10"-5); //10 minus operator converted all the strings to number
console.log("25"*"4"); //100 multiply operator converted all the strings to number
console.log(2+3+4+"5"); //95 as 2+3+4=9 + "5" is "95"
console.log("10"-"4"-"3"-2+"5"); //15

//Example
let n = "1" + 1; // "11"
n = n-1; // 10: As minus operator will convert the string 11 to number 11
console.log(n); // 10
*/
/*
//TRUTHY & FALSY 
// 5 falsy values : 0, "", undefined, null, Nan

const money = 0;
if(money){
    console.log("Don't spend it all");
} else{
    console.log("Get a job!"); // Output is Get a job because 0 is a falsy value and therefore true will not be executed
} 

let height;
if(height){
    console.log("True");
}
else{
    console.log("False"); // Output is False for similar reasons
}
*/

//EQUALITY OPERATORS
// === is a comparison type operator which is called "Strict equality operator" which results only true value
// ==  is a comparison type operator which is called "loose equality operator" which results only true value

18 === 18 // true
"18" === 18 // false
18 == 18 // true
"18" == 18 // true 
// Note: In order to have clean n least probabilty of bugs, use === as much as possible
/*
const fav = prompt("What is your fav no.?");
console.log(fav);
console.log(typeof fav); // string

if(fav == 23){
console.log( fav + " is an amazing No.");
} // Output is console value as Number entered 23 is converted to string 23
*/
/*
const fav = Number(prompt("What is your fav no.?"));
console.log(fav);
console.log(typeof fav); // Number

if(fav === 23){
console.log( fav + " is an amazing No.");
}// Output is console value as Number entered 23 is strictly equal to 23
*/
// "!==" is a strictly not equal to operator
// "!=" is a loose not equal to operator

//BOOLEAN LOGIC
/*
// THE SWITCH STATEMENT
const day = "Monday";

switch(day){
    case "Monday": //day==="Monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; 
    case "Tuesday":
    console.log("Prepare theory videos");
    break;
    case "Wednesday":
    case "Thursday":
    console.log("Write code examples");
    break;
    case "Friday":
    console.log("Record videos");
    break;
    case "Saturday":
    case "Sunday":
    console.log("Enjoy the weekend");
    break;
    default:
    console.log("Not a valid day!");        
} // Output is Plan course structure & Go to coding meetup and stops but if we remove "break" statement
// Then it will continue to the output of Tuesday and so on if break is not there at Tuesday too
*/

//STATEMENTS(it represents the action needs to be taken) & EXPRESSIONS(it produces value)
/*
//THE CONDITIONAL(TERNARY) OPERATOR
const age = 23;
age>=18 ? console.log("I like to drink wine") : console.log("I like to drink water");
const drink = age>=18 ? "wine" : "water";
console.log(drink);
console.log(`I like to drink ${age>=18?"wine":"water"}`);
*/

