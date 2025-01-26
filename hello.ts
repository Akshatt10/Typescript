function greet(person : string | number) { // supports multiple types.
    console.log("Hello, " + person);
}

greet("Akshat");
greet(1);
// greet(1); // Error: Argument of type '1' is not assignable to parameter of type 'string'.    


let y: any = 1; // any type makes it to be any type.

y = true;
y = "Hello";
