/*comments
single line comment - //
double line comment - 
semicolon(;) at the end of the line is not mandatory in js & ts
*/

//variables - it is a container which stores either single value or multiple values

let i = [10, "str"]; // here i is variable and 10 is value

console.log(i)

/*
3 types we can declare a variable
1. var - in modern js/ts we dont use var keyword to declare a variable
2. let - whenever we know that the value of the variable can change at any point of time then we hv to use let keyword
3. const - which is used to declare a constant variable(value of variable will never change)
let and const - ES6(ECMA SCRIPT 6 - introduced in 2015)
*/

/*
syntax for a variable
keyword(var/let/const) variablename : datatype(optional) = value - typescript syntax
keyword(var/let/const) variablename  = value - javascript syntax
*/

//scope of variable:
//1. global scope - which is accessible from any part of the code inside the file eg: let i = 10
//eg: u have visa so u can freely move over the world
//2. local scope - which is accessibleonly within the block where is declared eg:  { let j = 20 } 
// eg: u dont have visa then u r local member so only u r permitted to India


console.log(m) //hoisting - output is undefined
var m = "java";  //global scope
console.log(m)

if(true){
    var m = "string" //local scope
}
console.log(m); // now string will be printed as var is reinitialised or overriden the global variable
//  from java to string

/*var
why we will not use var keyword
1. scope - global or functional scope
2. whenever u declare a variable using var keyword it can be redeclared and can be reinitialised as well
3. Hoisting - var keyword variables are hoisted on the top of the block where they are declared
but the value is not hoisted only the declaration is hoisted and then it prints as undefined   -- doubt see in video
4. it is not mandatory to assign the value of a variable at the tym of declaration.
*/


/*let
1. scope - block scop {....} - inside curly braces we will declare
it is local scope in nature
2. whenever u declare a variable using let keyword it cannot be redeclared but it can reinitialised
3. Hoisting - let keyword variables are hoisted on the top of the block where they are declared
but the value is not hoisted only the declaration is hoisted and then it throws error
4. it is not mandatory to assign the value of a variable at the tym of declaration.
*/

//declaration means having keyword,variablename and value
let let1 = "JS" //this is declaration with a let keyword 
let1 = 'TS'   //this is reinitialisation without let keyword

{
    let let1 = 10; //local scope
    console.log(let1)
}
console.log(let1)

/*
const
1. scope - block scop {....} - inside curly braces we will declare
it is local scope in nature
2. whenever u declare a variable using const keyword it cannot be redeclared and it cannot be reinitialised
3. Hoisting - const keyword variables are hoisted on the top of the block where they are declared
but the value is not hoisted only the declaration is hoisted and then it throws error
4. it is mandatory to assign the value of a variable at the tym of declaration.
*/

const abc = 10
//abc = 20 // it cannot reinitialised
// const abc = 30 // it cant be redeclared