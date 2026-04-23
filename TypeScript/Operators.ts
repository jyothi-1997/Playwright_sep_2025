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
 1.pre-decrement(--c) -- first the value of variable will be decremented 
 and then the action will be performed
 2.post-decrement(c--) first action will be performed and then the value of variable will be decremented

*/

let a = 10
let b = 2
console.log(a+b) //addition
console.log("TS" + "JS") //merging
console.log(a-b) //subtraction
console.log(a*b) // multiplication
console.log(a/b) //division
console.log(a%b) // modulus - returns the remainder of a division operation -
console.log(a**b) //exponentiation - 10^2 - 10*10 = 100
//increment(++) -
let c = 10
console.log(++c) // ++c = 1+c
console.log(c++) // c++ = c+1

//decrement(--) //a-- = a-1 
let f = 7
console.log(f--) // f = f-1 //7-1 = 6
console.log(--f) // f = 1-f //6-1 = 5

/* 2. comparison operators -
used to compare two values and return the value
in the form of boolean(true/false)
1. equals(==) - checks if two values are equal or not
2. not equalsto(!=) - 
3. strict equality(===) - it checks is the values and datatypes of the variables are same 
4. strict not equalsto(!==) - opposite to strict equality
5. greater than(>)
6. greater than equalto(>=)
7. less than(<)
8. less than or equalsto(<=)
*/

//interview question - diff between equalsto and strict equality and strict not equalsto

let var1 = 10 //string - type coercion
let var2 = "10"
//let var2 = Number("10") -  Type Conversion if u want to convert to number then write in value as Number("10")
console.log(var1+var2)
console.log(var1 == var2) //equalsto
console.log(var1 != var2) //not equals to
console.log(var1 === var2)//strict equality

console.log("-------------")
let var3 = "string"
let var4 = "String"
console.log(var3 === var4)
console.log(var3 !== var4)


console.log("----LOGICAL OPERATORS------")
/* 3. logical operators - it will validate 2 different expressions or conditions
 and depending on that return the result in the form of boolean(truw/false)
1. logical AND(&&) -it will return true as a result only if 
 Both the conditions are true
true && true = true
true && false = false
false && true = false
false && false = false
2. logical OR(||) - either of the condition is true then it returns true
true || true = true
true || false = true
false || true = true
false || false = false
3. logical Not(!) - reverse the result from true to false and viceversa
   !true = false
   !false = true
*/

//Logical AND
console.log("AND (&&)", (10>2) && (6>2)) //logical and
console.log("AND (&&)", (10>2) && (1>2)) //logical and
console.log("AND (&&)", (1>2) && (6>2)) //logical and
console.log("AND (&&)", (2>2) && (2>2)) //logical and

//Logical OR
console.log("OR (||)", (10>2) || (6>2)) //logical OR
console.log("OR (||)", (10>2) || (1>2)) //logical OR
console.log("OR (||)", (1>2) || (6>2)) //logical OR
console.log("OR (||)", (2>2) || (2>2)) //logical OR

//Logical NOT
console.log("NOT (!)", !(10>4.5))
console.log("NOT (!)", !(3>4.5))


/*4. Assignment Operators(=) - assign the value to a variable
eg: let d = 10
*/
//diff b/w =,==,=== - interview question

let d = 10
d = d+5 // d+=5 is also same as d = d+5
console.log(d)
d -= 5
console.log(d)
d *= 5
console.log(d)
d /= 5
console.log(d)


/* 5. Ternery operators

*/