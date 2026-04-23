//loops - which will execute the same block of code{...} for multiple times
//by using console statement we cant print for each and every line manually but we can use loops

/*1. For loop
three types of loop
     1. for loop - traditional approach - if we know how many times we have to run the iteration
     2. for ..of loop - loop over the iteratable objects like array[1,2,3,4],strings
     3. for ..in loop - looping over the properties of an object{ key: value}
Syntax: for loop
for(initialisation;condition;increment/decrement)
{
    //code
    break
}
    Initialisation - initialise the value of the variable to start the execution
    condition - condition to check whether the loop should continue or not
    incre/decre - inc/dec the value of the variable for each iteration

*/

//ctrl+c - stop the infinite loop execution

for(let i = 1;i<6;i++){    //1<6 = 1++ = 1+1 =2, 2<6 = 2++ = 2+1 = 3
    console.log(i) // 1 2 3 4 5
    if(i==3){
        break
    }
}


/* 2. while loop
if we do not know how many times to run the iteration
Syntax:
initialisation
while(condition)
{
//code
inc/dec
}


*/

console.log("---while loop---")
//print 1 to 10
let w = 1
while(w<11){
    console.log(w)
    w++
}



/*3. do-while loop
if we want to execute the loop atleast 1 time 
before checking the condition
syntax:
initialisation
do{
    //code
    inc/dec
}while(condition)
*/
console.log("------do-while loop----")
// print 10 to 1

let doo = 10
do{
    console.log(doo) //10
    doo-- //9
}while(doo!=0) // doo!=1, doo>=1, doo>0