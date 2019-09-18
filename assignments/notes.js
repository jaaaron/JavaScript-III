/* this */
/* Principle 1: Window/Global Object Binding
When in the global scope, the value of “this” will be the window/console Object; */
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

  /* Principle 2: Implicit Binding
Whenever a function is called by a preceding dot, the object before that dot is this. */
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

  //another example
  const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Ryan' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  // Invoke Methods on our objects
  me.sayName();
  you.sayName();

  /* Principle 3: New binding */
  function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

  /* Principle 4: Explicit binding
Whenever JavaScript’s call or apply method is used, this is explicitly defined. */
/* Taking the above object oriented approach we can discover that we can override what the CordialPerson constructor objects get set to. By calling them explicitly with a new context using .call and .apply */
jerry.speak.call(newman); newman.speak.apply(jerry);

/* Constructor function */
function Animal(object) {
    this.name = object.name;
  }
  /* A constructor function, ‘Constructs’ objects”. It can be thought of as a template. The function itself needs to take in an object literal of some sort so that it can map that object literal’s properties to a new object that will be returned once instantiated. */
  function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
      return `Hello, my name is ${this.name}`;
    };
  }

  const fred = new Person({
    age: 35,
    name: 'Fred',
    homeTown: 'Bedrock'
  });
  console.log(fred); console.log(fred.speak());

  /* prototype method to add speak */
  function Person1(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}
  Person1.prototype.speak = function () {
    return `Hello, my name is ${this.name}`;
  };

  function Child(childAttributes) {
    Person.call(this, childAttributes); // binding this to Person
    this.isChild = childAttributes.isChild; // this will be a special attribute to Child
  }
  /* The problem with Child is that it doesn’t necessarily know about the Person prototype yet. We have to manually tell Child about Person using Object.create(). */
  Child.prototype = Object.create(Person.prototype);

  // Adding
  const pebbles = new Child({
    age: 3,
    name: 'Pebbles',
    homeTown: 'Bedrock',
  });
