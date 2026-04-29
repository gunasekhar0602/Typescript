12) Array Methods
 
Comparison of TypeScript Array Methods:
 

 
Note:
 
• forEach() is purely for executing side-effects (like logging), it doesn't return anything.
 
• map() transforms data and returns a new array of the same length.
 
• filter() is used when you want to keep certain elements based on a condition.
 
• reduce() is powerful and used to accumulate values (e.g., sum, average, object merging).
 
• some() returns true if any element matches the condition.
 
• every() returns true only if all elements match the condition.


for each()

Executes a function once for each array element
It Takes function as a parameter

Syntax: array. forEach(function(currentValue, index, array){})

currentValue - The current element being processed in the array
index (optional) - The index of the current element being processed in the array
array(optional) - The array the current element belongs to.

Ex1: Get index of all the fruites along with value.

let fruits: string[] = ['apple', 'banana', 'orange', 'mango', "kiwi'];

console.log("Printing fruites along with index using for loop...");

for(let i in fruits)
{
	console.log(i, fruits [i] );
}

foreach()

fruits. forEach(function(element, index)
{
	console. log("$(index}', '${element} );
})

2) map() -
Creates a new array with the result of calling the function on every element of an array
It Takes function as a parameter.
Returns the same number of elements that we have in original array.
Syntax: array map(function(currentValue, index, array){})

Ex1: Get square of all the numbers in an array. 
Ex: [1,2,3] then result should be [1,4,9]

let numbers: number[]=[1,2,3,4,5];
let squaredNumbers=numbers.map(function(element)
{
	return(element * element);
})

console.log("Squared numbers:", squaredNumbers); 
Out put - //[ 1, 4, 9, 16, 25 ]
console.log("Original array: ",numbers);
Out put - //[1, 2, 3, 4, 5 ]



//Ex2: Double each number [1,2,3,4,5] ---› [2,4,6,8,10]

let doubledvalues=numbers.map((element) =>{
return(element*2);
})

let doubledValues=numbers.map( (element)=> element*2); 
// If you have single return statement inside the arrow function then {} and 'return'

console.log("Doubled Numbers: ", doubledValues); 

Out put - // [ 2, 4, 6, 8, 10 ]

3. filter() -
 Creates a new array with all the elements that pass/satisfy the function
It Takes function as a parameter.
Returns either same or fewer number of elements compared to original array.

// Syntax: array. filter(function(currentValue, index, array) ())
//Ex1: Get the only even numbers from an array

let evenNumbers=numbers. filter( (num)=>
{
	return• (num%2==0);
})
* /
let evenNumbers=numbers.filter( (num) =>num%2==0);
console.log("Even Numbers: ", evenNumbers )
Output - // [2,4]

//Ex2: Get the only numbers greater than 3 from an array

let filteredNumbers=numbers.filter((num) =>num>3);
console. 10g( "Numbers greater than 3:", filteredNumbers); //[4,5]

4. reduce- 
Applies a function on every element of an array and returns a single value.
1/ Syntax: array. reduce(function(accumulator, currentValue, index, array){})
// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed
//Ex1: Get the total (sum) of all the elements in an array

let total=0;
for (let i=0;i‹numbers.length;i++)
{
	total=total+numbers[i]; //1 2 3 6 10
}
console. log("Sum of all the numbers:", total); //15

Using reduce method

let resuceResult= numbers. reduce((total, element)=>
{
	return (totaltelement);
},0);
// Here 0 is default value of accumulator


let resuceResult= numbers. reduce( (total, element)=> total+element, 0) ;
// Here 0 is default value of accumulator

console. log("Sum of elements in array:", resuceResult); //15

5. some() - 
Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false
// Syntax: array. some(function(currentValue, index, array)()
//Ex1: Check array contains negative values

let hasNegative=numbers.some (element)=> element<0);
console. log("Does array contains negatives? " , hasNegative);
//false

//Ex2: Check array contains positive values

let hasPositive=numbers.some (element)=> element>0);
console.log("Does array contains Positives? "
'hasPositive);
 //true

6. every() -
 Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false
// Syntax: array.every(function(currentValue, index, array)())
//Ex1:

let allEven=numbers.every (element)=>element%2==0);
console.log("Are all numbers are even?",alleven ); 
//false

//Ex2:

let allGreaterThanOne=numbers.every (element)=> element>=1 ); console. log("Are all the numbers greater than or equal to one?" , allGreaterThanOne); 
//true

//Ex3:

let allPositve=numbers.every (element)=> element>0 );
console.1og("Are all the numbers positive?", allPositve); //true



