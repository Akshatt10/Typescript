"use strict";
function greet(person) {
    console.log("Hello, " + person);
}
greet("Akshat");
greet(1);
// greet(1); // Error: Argument of type '1' is not assignable to parameter of type 'string'.    
let y = 1; // any type makes it to be any type.
y = true;
y = "Hello";
