'use strict';
/*
const firstName = 'Alok';

const Alok = {
  firstName: 'Ankit',
  greet:  function () {
    console.log(`Hey ${this.firstName}`);
  },
}
Alok.greet();
*/

/*
const jonas = {
  firstName: 'Alok',
  year: 1992,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillinial = function () {
      console.log(this); // Undefined: As we know that 'this' of a simpler function is undefined(in strict mode otherwise it points to the window object in non strict mode) Note: It doesn't matter even if it is written inside an object.
      console.log(this.year >= 1981 && this.year <= 2000); //error
    };
    isMillinial();

    //-----------In order to make the above working we can use Arrow function
    
    const isMillinial = () =>{
      console.log(this); // jonas: Here, the parent Object is Jonas
      console.log(this.year >= 1981 && this.year <= 2000); // true
    };
    isMillinial();
    
  },
  greet: () => {
    console.log(this); // Window object: As 'this' of an arrow function is a 'lexical this' and points to its parent's object.
    console.log(`Hey ${this.firstName}`); // Hey undefined: As in the parent's object i.e window object no property name firstname exists therefore, results in undefined.
  },
};
jonas.calcAge();
jonas.greet();
*/
