//Functions - funstion definition or function statement starts with the function keyword and continues with the following
        //    - function name
        //    - a list of parameters contains in paranthesis() and separated by comma
        //    - statements are enclosed with curly braces

/*interview question: diff between argument and parameter
Parameter:
the variables that are used in the function definition
are called as parameters
Arguments :
the values that are passed to the function when it is called are called arguments

2. difference between function declaration and function Expression

*/

/* types of functions
1. Named function - A function which will also have a name 
 is known as function - function declaration
2. Anonymous function - anonymous means noname - a function which has no name then it is called as anonymous function
3. Arrow function(=>) - 
4. function constructor or constructor function - 
5. factory function - A function which returns an object - objrct{key : value}
6. IIFE - i mmediately invoked function expression
7. Default parameter
8. Optional Parameter - only in TS
9. Rest parameter
*/


/* 1. Named function
a function declaration is named function and  along with the name is also known as function declaration
- for reusability we can use Named function
Syntax:
function functionName(parameter: datatype(optional) : return datatype(optional)){
    //code
    //return - if want to return something then u can use return keyword
}
    functionName(arguments)

*/

/* when can we use Named Function
1. when we want to call the function multiple times
2. readibility and maintainability while understanding code - for debugging purpose it will be easy
3. if u r also trying to perform a recursion - recurion means
 calling the same function inside multiple times

 */

//void means nothing - when a function is not returning anything we can declare void 
function adds(a: number, b:number) :void{
    console.log(a+b)
} // it does not return anything


function add(a: number, b:number){
    console.log(a+b)
}
 add(12,4)
 add(100,300)

//with return type
//eg: consider someone has gifted u a pen then u need a place to store that is what
//it say i m returning u some and store it in a variable
 function add1(a: number, b:number){
    return a+b //it will not print anything but it performs addition internally
}
 const result = add1(45,55) // returned vale is stored in variable result now
 console.log(result)  //100


 /*Anonymous function - its a function expression - a function which does not have any name
when it does not have any name then we store it in a variable
when u try assign a variable to function then it is called function expression
for callback function we can use Anonymous function
Syntax:
    const fun = function(parameters){
            //code
        }
            fun(argument)

where to use anonymous functions
1. one time use 
2. call back function - calling a function as an parameter inside the function

*/

//interview question - diff between function declaration and function expression

const addition = function(a: number,b: number) {
    console.log(a+b)
}
addition(12,34)

console.log("-------call back function-----------")

function funcName(a: number, func: Function){
    //code
    console.log(a+ func(10,20))

}
funcName(10, function(b:number,c:number) { 
    return b+c}
 )



//Anonymous and Arrow functions are call back function

/* Arrow funcion(=>) - lambda function - arrow function is also part of anonymous function but we 
wont use even function keyword instead we use arrow function or symbol

Syntax:
(parameters) => 
*/

let sum1 = (c: number,d: number) => console.log(c+d)
sum1(3,4)

let sum2 = (e: number,f: number) => (e+f)
console.log(sum2(4,5))

console.log("eg2")
const arfun = (a: number, b:number, c: number) => a+b+c
console.log(arfun(10,20,30));


/*
Avoid arrow function:
1. when it is related to the object - this
2. when the function involves complex logic
*/


/*IIFE - immediately invoked function expression
this function is also one time usable function
it is also part of anonymous function
we will write the inside the paranthesis and that will becomes the name of the function
Syntax:
(function(){
   //code   //eg: server is up and running
})
   ()
*/

(function(){
    console.log("server is up and running")
})
//console.log("******")
();

//eg:2
(function(){
    var count = 0
    function increase1(){
        count++
        console.log(count);

    }
    increase1()

})
();

/* Default Parameter: allows you to specify or provide default value to any of the parameter

*/

function greets(name : String = "lk" ){  //default value is provided as Rahul here so no need to call at line 170
    console.log(name)
}
greets("he"); // no need to call here like greet("rahul") but if u call here again with joe then joe will get printed


/* Method overaloading - it is a process to diff function with the same name but diff parameters
methos overloading is not possible in JS/TS
*/


/* Optional parameter(?):parameter which is defined inside the function is not mandatory
  only in TS its possible not in JS
*/

function option(namme, age?){
    if(age!==undefined){ // to handle method overloading or undefined value we can use this logic
console.log(`your name is = ${namme} and age is = ${age}`);
}
else{
    console.log(`your name is = ${namme}`)
}
}
option("optional parameter")
option("optional parameter", 12)

/*Rest Parametr(...) - it provides infinite number of arguments
Rest parameter starts with ...

*/

function add3(...nums){  // rest parameter
  console.log(nums)
}
add3(10,8,9,7,8,9, "ik") // n number of vales we can provide