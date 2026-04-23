/*Array - its a special type of variable that can hold more than one value
        it contains list of items and it can be any of datatype like objects,string,numbers,boolean
        it adds the data in ordered collection which means it defines the indexing and starts with 0 inside the array
        //[index:value]
        //[0:10,1:2,2:3, 3:"TS", 4:null, 5:true, 6:undefined, 7:{name : "John"}]
        */


let array = [10,2,3, "TS", null, true, undefined, {name : "John"}]
console.log(array)
console.log(array[0])

/*
There are 2 ways to declare an array
1. using square bracket[] = Array literal
2. using NEW keyword - Array Constructor - new Array()

*/

/*Array Literal - []
Syntax:
let/const arrayName : datatype[](optional) = [value]

*/

let array1 : number[] = [12,1,3,4,5,6] // whenever u define datatype then it should be entered along with [] as it is containing array data
console.log(array1)
let array2 : any[] = ["TS", {nice : "John"}, undefined, null , 2, [2,3,4,67]] //inside array we can store array as well
console.log(array2)
let array3 = [] // we can create empty array also
//indexing
array3[0] = 10
array3[1] = 30 
array3[10] = 50 // 2to9 it will say <8 empty items> in console
console.log(array3)
console.log(array3[15]) // undefined it will print
console.log(array3.length) // 0 to 10 -- 11 is printed

/*
isArray(variable)
        It verifies whether it is array or not
*/


console.log(Array.isArray(array1))
console.log(Array.isArray(array3))


/*2. Array Constructor - new Array() -- it helps to create an object to a class
Syntax:
let/const arrayName = new Array<datatype>(value1,value2,value3,.....)

*/
console.log("*******************************")
let array4 = new Array(10) //whenever u store first value as number or string or anything then it will not take any other datatype if it is number it will be number only
let array5 = new Array<any>(10, "TS", true) //now u can use any datatype
console.log(array4);

// length - return the total number of elements in an array

// instead of defining in array each and every value we can use for loop
for(let i =0; i<array5.length; i++){
        console.log(array5[i]);
}

/* for ...of loop 
        It will iterate over the element of an array
Syntax:
for(variable declaration of arrayName){
    //code
}

*/
console.log("*******")
let count = 0;
for(let element of array5){
        count++
        console.log(element);
        if(count == 2){
                break
        }
}

console.log("***********Methos of an Array********");

/* 1. push(ele1, ele2, ele3) - push is a function or method which adds the elements to the end of an array
Syntax:
arrayNmae.push()

*/

let array6 = ["orange", "Apple", 10,2,3,4,5,6,true]
array6.push(100,200,"JS"); //appends the elements to array6 or any other variable which we define
console.log(array6.length)
console.log("Push" ,array6);

/*2. pop() - removes the last element from an array
Syntax:
arrayName.pop()
*/
console.log("pop removes last ele:", array6.pop()); // removes the last element and removed element will be displayed in console which means it return value in console

/* interview question:
1. diff b/w push() & unshift() method
*/


console.log("******unshift*********");
/* unshift(parameter....) -- adds the element to the begining of an array
Syntax:
arrayName.unshift(arguments....)

*/

array6.unshift("TS", 10000)
console.log("unshift()", array6) // it will add these values at the starting of an array

console.log("******shift*********");
/*shift() - removes the first element from an array
Syntax:
arrayName.shift()
*/

console.log(array6.shift()) // removes first element // TS


console.log("******splice*********");
// difference between slice() and splice()

/* splice(startIndex, deleteCount, ele1, ele2....)
Syntax:
arrName.splice(startIndex, deleteCount, ele1, ele2....)

startIndex: The position where u want to add/delete the element 
DeleteCount - the number of element you want to delete from the array at the starting index
....items(nothing but ele1, ele2....) - the element that u want to add at the startIndex

*/

let array7 = [10,2,3,4,5,6,7,8, "TS"]
array7.splice(2, 3, 23,"pink",56) // here splice(2) means index[2] and next it says remove 3 element splice(2,3)
//  so it will goto index[2] and remove that one element and then add values to third parameter(23,34,56)
//array7.splice(2, 0, 23,"pink",56) - it deletes none of the elements
//array7.splice(2, 1, 23,"pink",56) - it deletes only one element
console.log("splice()", array7)

console.log("******slice*********");
/* 6. slice(startIndex?, endIndex?) - returns the portion of an array between the start and end index
                                    - both startindex and endindex are optional in nature
startIndex: the position where u want to start the slice
endindex(Exclusive) [endindex-1] - the position where u want to end the slice
Exclusive means last-1 
Syntax:
arrayName.slice(startIndex, endIndex)
*/
let array8 = [10,2,3,"Red",5,50,6,7,8, "TS", 50,60,50]
console.log("slice index3", array8.slice(3,6) )// it will return only 3,4,5 indexes
console.log("slice All", array8) // it will print all the elements
console.log("slice index2", array8.slice(2)) // it will print from index[2]
console.log(array8.slice())// it returns all the elements

console.log(array8.slice(-7,-3)); //the index will start from right to left and indexing starts with -1 not 0
console.log(array8.slice().reverse()) // it will print the values in reverse using slice method


console.log("******indexof*********");
/*imp method: 7. indexOf(element, startIndex?) - returns the index of first occurance of an element
interview question: 1. To find out he first duplicate element from an array
Syntax: 
arrayName.indexof(element, startIndex)

*/
console.log(array8)
console.log(array8.indexOf(50, 7)) // it will print 10 as it identifies first 50 occured value after 7th index

console.log("**************lastindexof*******************")
/* 8. lastIndexof(element, startIndex?) - returns the index of the last occurance of an element

*/

console.log(array8.indexOf(50))
console.log(array8.lastIndexOf(50))


console.log("**************concat*******************")
/*concat(array2,array3...) - merges two or more arrays and returns the new array
Syntax:
arrayName.concat(Array2,array3...)
*/

let arr1 = [1,2,3,"rest"]
let arr2 = [true, null, 3, 6, undefined]
//let arr3 = arr1.concat(arr2)
//console.log(arr3)

/*join(separator?) - joins all the elements of an array and returns the string
Syntax:
arrayName.join(separator)
*/

let arr4 = ["Anvi", "sree", "Jyothi"]
console.log(arr4.join(" ")) //prints Anvi sree Jyothi with spaces
console.log(arr4.join(",")) //prints Anvi,sree,Jyothi with commas as we asked to print with commas

/* toString() - converts the array to string
Syntax:
arrayName.toString()
*/

console.log(arr4.toString())

/*Includes(element, startindex?) - returns true if the element is present inside an array else returns false

*/

let arr5 =[10, 20, 30, 40,50]
console.log(arr5.includes(40, 3)) // true
console.log(arr5.includes(-40)) //false

console.log("******************************")

/*13. forEach(fun) - it will iterate over the each and every element of an array once
It takes function as a parameter
Syntax:
arrayName.forEach(function(currentValue, index, array){})
currentValue - it represents the current element of an array
index(optional) - it represents the index of current element being processed in an array
array(optional) - the array the current element belongs to
*/


let arr6 = [10,20,30,40,50,60]

for(let element of arr6){
console.log(element, array7.indexOf(element))
}


/*map(fun) - it will iterate over the element of an array and returns a new array based on the condition
*/

/*filter(fun) - it will iterate over the element of an array and returns a new array based on the condition
*/

/*reduce(fun) - it will iterate over the element of an array and returns a single value based on the condition
*/

/*some(fun) - it will iterate over the element of an array and returns true/false based on the condition
*/

/*every(fun) - it will iterate over the element of an array and returns true/false based on the condition
*/




