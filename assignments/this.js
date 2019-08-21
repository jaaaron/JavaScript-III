/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/ Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
// Window/ Global Object Binding
// code example for Window Binding
function fullName(name) {
    console.log(this);
    return name;
}
fullName("James Aaron");

// Principle 2
// Implicit Binding
// code example for Implicit Binding
const nameGreeting = {
    greeting: 'Hi',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  nameGreeting.sayHello('James');

// Principle 3
// New Binding
// code example for New Binding
function wildAnimal(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  const tiger = new wildAnimal('Deer');
  const deer = new wildAnimal('Whitetail');
  tiger.speak()
  deer.speak();
// Principle 4
// Explicit Binding
// code example for Explicit Binding
tiger.speak.call(deer); 
deer.speak.apply(tiger);