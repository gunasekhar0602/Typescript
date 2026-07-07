//1) Named Functions
 
// A named function has a specific name and can be reused multiple times in the code.
 

 
// Example
 
function addn(a: number, b: number): number
{
	 return a + b;
}
 
console.log(addn(5, 10)); // Output: 15
 
/* Key Points
 
• The function name is add.
• It takes two parameters (a and b), both of type number.
It returns a number.
 */


// Example 1 - no parameter and no returntype

function display():void
{
	console.log("Apple")
}
display()

//Output -                     // Apple



// Example 2 - Parameter and return value

// creating function and providing parameters
function addnumbers (x:number, y:number):number
{
	return (x+y);
}

// store the function in varaible and print
let res:number=addnumbers(2,3)
console.log(res)
//Output - 5



// Example 3 - name function with rest parameter
/* 
Rest parameter -

If we are providing two parameters means me should provide two arguments.

But when it comes to rest parameters n number of parameters can be passed

Rest parameters don't restrict the number of values that you can pass to a function

Array -
Array is nothing but which can hold different jets of data (or) multiple jets of data.
 */

// creating a function. Providing parameters in array
function addnumber(...nums:number[])
{
	let i;
	let sum:number=0;
	
	for (i=0; i<nums.length; i++)
	{
		sum=sum+nums[i]
	}
	console.log('sum of numbers', sum)
}

addnumber(2,3)             // 5 
addnumber(10,20,30,450,45,43,948382)        // 948980



// Example 4 - Named function with optional parameter

function displaydetails (id:number,name:string,mailid?:string)
{
	console.log("ID:",id)
	console.log("Name:", name)
	console.log("Email:",mailid)
}
displaydetails(7,'Dhoni','Dhoni@gmail.com')

// Output - 
/* ID: 7
Name:Dhoni
Email:Dhoni@gmail.com		


displaydetails(8,”Jadeja”)

Output - 
ID:8
Name:Jadeja
Email:	undefined
 */




// Example 5 - Named function with default parameters

// creating a funtion and providing value to the parameter
// default paramter - assigning value to the parameter directly 
function discount(price:number, rate:number=0.5):void
{
	let discount:number=price*rate
	console.log(discount )
}

discount(20,9)


//Out put -180

discount(2)
/* Output - 1

If we are explicitly mentioning the value, it will consider */



// 2) Anonymous Functions
 
//An anonymous function does not have a name. It is usually assigned to a variable.
 
/* Syntax
 
let variableName = function(parameters): returnType
{
	// function body
}; */
 
//Example

// create a funtion and assign to a variable and provide the parameters
let multiply = function(x: number, y: number): number 
{
	return x * y;
}
 
console.log(multiply(4, 5));
// Output: 20

/* Key Points

• The function is stored in a variable (multiply).
• It does not have a function name.
It behaves like a regular function. 
 */



// 3. Arrow Functions (Lambda Functions)

/* Arrow functions provide a shorter syntax for writing functions.
 
Syntax
 
let functionName = (parameters): returnType => expression;
  */
// Example
 
let square = (num: number): number => num * num;
 
console.log(square(6)); // Output: 36
 
/* Key Points
 
• Uses => (fat arrow) instead of function keyword.
• Single-line functions don’t need {} or return keyword.
• Multi-line functions require {} and return.
  */

// Multi-line Example
 
let greeting = (name: string): string =>
{
	return `Hello, ${name}!`;
};
 
console.log(greeting("Pavan")); 

// Output: Hello, Pavan!

 


// 9. Function 2

// In TypeScript, functions can have special features like callback functions and function overloading, making them more powerful and flexible.
 

// 1) Callback Functions
// A callback function is a function that is passed as an argument to another function and gets executed later.
 
 
// Why Use Callback Functions?
 
// Useful when you want a function to execute only after another function completes.
 //Common in asynchronous operations like API calls, file handling, or event handling.
 
 
//Example: Callback Function in TypeScript
// Example 1
// Function that takes a callback as an argument
// callback is not a keyword, we are giving it as a name for better understanding

function greet(name: string, callback: (message: string) => void)
{
	console.log(name);

	callback("Hello"); // Calling the callback function
}

// Callback function

function showMessage(message: string){

console.log(message);

}

// Calling the function by passing the callback
greet("Pavan", showMessage);

// Output:
 
Pavan
Hello
 
// Here, greet calls showMessage after displaying the name.


//Example 2

function sum(a: number, b: number, callback: (result: number)=>void)
{
	let result: number= (a+b)
	callback(result)
}
function displayresult(result: number): void
{
	console.log(result)
}

sum (10,20, displayresult)


//Out put - 30

/* 
2) Function Overloading in TypeScript 
 
Function overloading allows you to define multiple versions of a function with the same name but different parameters or return types.
 
Why Use Function Overloading?
 
• Helps create functions that work differently based on input types.
 
• Improves code readability and reusability.
 
 
Basic Rules for Function Overloading
 
1.Define Overload Signatures:
List all possible ways the function can be called.
 
2.Single Implementation Signature:
There must be one actual function implementation that handles all cases.
 
3.Ensure Compatibility:
The implementation must be compatible with all overload signatures.
 


Signature -
A function without having implementation (or) a function with out a body is called signature.
 */

//Correct Function Overloading Examples

//1 . Overloading with Different Parameter Types

// Overload signatures
 
function displays(value: number): string;
 
function displays(value: string): string;
 
function displays(value: boolean): string;
 
 
// Implementation function
 
function displays(value: number | string | boolean): string
{
 	return `Value is: ${value}`;
}

// calling the function
 
console.log(displays(100)); // "Value is: 100"
 
console.log(displays("Hello"));  // "Value is: Hello"
 
console.log(displays(true)); // "Value is: true"
 
 
// ✔ Valid because the implementation function handles all specified types.




//2 . Overloading with Different Number of Parameters
 
// Overload signatures
  
function add(a: number, b: number): number;
 
function add(a: number, b: number, c: number): number;
 
// Implementation function
 
function add(a: number, b: number, c?: number): number
{
	return c !== undefined ? a + b + c : a + b;
 } 

 console.log(add(2,3));      //5
 console.log (add(2,3,4));     // 9
 
//Valid because c is optional, ensuring compatibility with both overloads. 

// 3 . Overloading with Different Return Types

// Overload signatures
 
function processInput(input: string): string;
 
function processInput(input: number): number;
 
 
// Implementation function
 
function processInput(input: string | number): string | number
{
 	return typeof input === "string" ? input.toUpperCase() : input * 2;
 }
 
 
console.log(processInput("hello")); // "HELLO"
 
console.log(processInput(10)); // 20
 
