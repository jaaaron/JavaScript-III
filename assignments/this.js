/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/ Global Object Binding
window/console object
* 2. Implicit Binding
Whenever a function is called by a preceding dot
myObj.sayHello('Ryan')
* 3. New binding
const jerry = new CordialPerson('Newman')
* 4. Explicit binding
Whenever JavaScript’s call or apply method is used
jerry.speak.call(newman); newman.speak.apply(jerry)
*
* write out a code example of each explanation above
*/

// Principle 1
// Window/ Global Object Binding
// code example for Window Binding
function sayFirstName(name) {
    console.log(this);
    return name;
}
console.log(sayFirstName("James"))
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
nameGreeting.sayHello('James')  
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
  tiger.speak();
  deer.speak();
// Principle 4
// Explicit Binding
// code example for Explicit Binding
tiger.speak.call(deer); 
deer.speak.apply(tiger);