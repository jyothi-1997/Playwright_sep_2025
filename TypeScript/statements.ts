//Conditional statements - it allows to execute the different block of code
//based on different condition


/*1. if statement - this will handle only the positive scenario
it will execute block of code only if condition is true
syntax:
if(condition){
//code
}
*/ 
let ispopup = true
if(ispopup){
    console.log("close the popup")
    }

let alerts = "alert"
if(alerts == "alert"){   // id a is in capital letter A then if block will not execute
    console.log("close the popup")
    }

/* 2. if else condition - if the condition is true then if block will takecareof otherwise the 
else block of code will be executed
if the condition becomes false then if else statement will takecareof
syntax:
if(condition){
//condition is true - this block will be executed 
}
else{
//condition is false - this block will be executed
}
*/    

const role = "Admin"

if(role === "Admin"){
    console.log("Admin user navigation")
}
else{
    console.log("Normal user navigation")
}

/*if else if statement
it will validate multiple conditions depending on the
syntax:
if(condition){
//condition true - this block executes
}
else if(condition1){
//condition1 true - this block executes
}
else if(condition2){
//condition2 true - this block executes
}
else{
    //condition is false
}

*/

let browser = "firefox"
if(browser === "chrome"){
    console.log("Launch the chrome browser")    
}
else if(browser == "firefox"){
    console.log("Launch the firefox browser")
}
else if(browser === "safari"){
    console.log("Launch the safari browser")
}
else{
    console.log("Invalid Browser")
}

/*4. switch statement - it will not validate each & every condition
syntax:
switch(expression){
case value1:
    //code to be executed if expression matches with value1
    break;
case value2:
    //code to be executed if expression matched value2
    break;
default:
    //code to be executed if expression does not match any of the value
    break;

switch will handle only simple conditions only when it has
single datatypes --> opp to if else if
}
*/

 console.log("---switch statement---")

 let browserName = "chrome"
switch(browserName){ // switch firefox
    case "firefox":
        console.log("Launch the firefox browser")
        break //if break statement is not given then it will print all the statements
    case "chrome":
        console.log("Launch the chrome browser")
        break
    case "safari":
        console.log("Launch the safari browser")
        break
    default:
        console.log("Invalid browser")
        
}

//example2:
let day = 1
switch(day){
    case 1:
        console.log("day 1 is monday")
        break
}



/*when to use if else if
1. Ranges(>90)
2. logical operators - multiple conditions
3. multiple datatypes are avilable for comparison
eg: name = "rahul", salary = "400000"
*/


/* Nested if else condition
Syntax:
if(condition1)
{
if(condition2){
//code to be executed if both conditions are true
}
else{
    //code to be executed if condition1 is true but condition2 is false
    }
    }
else
{
//code to be executed if xondition1 is false
}
*/


/*eg:
below 50 - failed
50 to 69 - D grade
70 to 79 - c grade
80 to 89 - B grade
90 to 100 - A grade
*/

let score = 0

if(score>=50){
    if(score>=90){
console.log("Grade A")
    }
    else{
        if(score>=80){
        console.log("Grade B")
    }else{
        if(score>=70){
            console.log("Grade C")
        }
        else{
            console.log("Grade D")
        }
    }
}
}
else{
    console.log("failed")
}


/*Ternary operator
short hand way of writing if - else statements
it consists of three parts:
1. the condition?
2. the result if the condition is true
3. the result if the condition is false
syntax:
(condition)? "true":"false"
All the parts which is 2nd and 3rd will be separated by (:) symbol

*/

let age = 20
let result = (age>=18) ? "you are eligible for voting" : "you are not eligible for voting"
console.log(result)