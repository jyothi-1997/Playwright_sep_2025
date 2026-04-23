//operators - its generally a symbol which is used perform some operations on variables or values
/* 1. Arithmetic operators - used to perform mathematical calculation or operation
addition(+) - it is used to work with both number and string datatypes
adds two numbers or concatenates the string
, subtraction(-), multiplication(*),division(/), modulus(%),
exponentiation(**) - raises a number to power of another number
,
increment(++) - increasea a value or number by 1
 2 types of increment
 1.pre-increment(++c) -- first the value of variable will be incremented
 and then the action will be performed
 2.post-increment(c++) first action will be performed and then the value of variable will be incremented

 Decrement(--) - decreases the value by 1
2 types of decrement
 1.pre-decrement(--c) -- first the value of variable will be incremented
 and then the action will be performed
 2.post-decrement(c--) first action will be performed and then the value of variable will be incremented

*/
var a = 10;
var b = 2;
console.log(a + b); //addition
console.log("TS" + "JS"); //merging
console.log(a - b); //subtraction
console.log(a * b); // multiplication
console.log(a / b); //division
console.log(a % b); // modulus - returns the remainder of a division operation
console.log(Math.pow(a, b)); //exponentiation - 10^2 - 10*10 = 100
//increment(++) -
var c = 10;
console.log(++c); // ++c = 1+c
console.log(c++); // c++ = c+1
//decrement(--) //a-- = a-1 
var f = 7;
console.log(f--); // f = f-1 //7-1 = 6
console.log(--f); // f = 1-f //6-1 = 5
/* 2. comparison operators -
used to compare two values and return the value
in the form of boolean(true/false)
1. equals(==) - checks if two values are equal or not
not equalsto(!=), strict equality(===), strict not equal to(!==)
greater than(>), greater than equalto(>=), less than(<), less than or equalsto(<=)
*/
//interview question - diff between equalsto and strict equality
var var1 = 10;
var var2 = "10";
console.log(var1 == var2); //equalsto
console.log(var1 != var2); //not equals to
/* 3. logical operators

 */
/*4. Assignment Operators

*/
/* 5. Ternery operators

*/ 
