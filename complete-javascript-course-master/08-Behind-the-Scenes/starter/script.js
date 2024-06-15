'use strict';

const firstName = 'Alok';

const Alok = {
  firstName: 'Ankit',
  greet:  function () {
    console.log(`Hey ${this.firstName}`);
  },
}
Alok.greet();

