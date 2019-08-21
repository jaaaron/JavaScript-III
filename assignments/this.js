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
console.log("test");
// Principle 3
// New Binding
// code example for New Binding

// Principle 4
// Explicit Binding
// code example for Explicit Binding