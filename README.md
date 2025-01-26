# What is Typescript?
- TypeScript is a programming language developed and maintained by Microsoft.
- It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

## Where/How does typescript code run?
- Typescript code never runs in your browser. Your browser can only understand javascript.
- Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
- Typescript is something that compiles down to javascript
- When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 

## Typescript compiler
- **tsc** is the official typescript compiler that you can use to convert Typescript code into Javascript
- There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
1. esbuild
2. swc


# Setting Up a Node.js Project with TypeScript

This guide walks you through the steps to set up a Node.js project with TypeScript and demonstrates the benefits of TypeScript in catching type errors at compile time.

---

## **Step 1 - Install TypeScript Globally**
Install the TypeScript compiler globally using npm:
```bash
npm install -g typescript 

