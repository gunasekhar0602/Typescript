1) Named Functions
 
A named function has a specific name and can be reused multiple times in the code.
 
Syntax
 
function functionName(parameters): returnType
{
	 // function body
}
 
Example
 
function add(a: number, b: number): number
{
	 return a + b;
}
 
console.log(add(5, 10)); // Output: 15
 
Key Points
 
• The function name is add.
• It takes two parameters (a and b), both of type number.
It returns a number.

Example 1 - no parameter and no returntype

Function display(): void
{
	console.log(“Apple”)
}
display ()

Output -                     // Apple

Example 2 - Parameter and return value

function add number (x:number, y:number):number
{
	return (x+y);
}

let res:number=addnumber(2,3)
console.log(res)

Output - 5

Example 3 - name function with rest parameter

Rest parameter -

If we are providing two parameters means me should provide two arguments.

But when it comes to rest parameters n number of parameters can be passed

Rest parameters don't restrict the number of values that you can pass to a function

Array -
Array is nothing but which can hold different jets of data (or) multiple jets of data.

function addnumber(…nuns:number[])
{
	let i;
	let sum:number=0;
	
	for (i=0; i<nums.length; i++)
	{
		sum=sum+nums[i]
	}
	console.log(“sum of numbers”, sum)
}

addnumbers(2,3)             // 5 
addnumber(10,20,30,45,044,45,43,948382)        // 948664

Example 4 - Named function with optional parameter

function displaydetails (id:number,name:string,mailid?:string):void
{
	console.log(“ID:”,id)
	console.log(“Name:”, name)
	console.log(“Email:”,mailid)
}
displaydetails(7,”Dhoni”,”Dhoni@gmail.com”)

Output - 
ID: 7
Name:Dhoni
Email:Dhoni@gmail.com		


displaydetails(8,”Jadeja”)

Output - 
ID:8
Name:Jadeja
Email:	undefined

Example 5 - Named function with default parameters


function discount(price:number, rate:number=0.5): void
{
	let discount:number=price*rate
	console.log(discount )
}

discount(20,9)
Out put -180

discount(2)
Output - 1

If we are explicitly mentioning the value, it will consider


2) Anonymous Functions
 
An anonymous function does not have a name. It is usually assigned to a variable.
 
Syntax
 
let variableName = function(parameters): returnType
{
	// function body
};
 
Example
 
let multiply = function(x: number, y: number): number 
{
	return x * y;
}
 
console.log(multiply(4, 5));
// Output: 20

Key Points

• The function is stored in a variable (multiply).
• It does not have a function name.
It behaves like a regular function. 

3. Arrow Functions (Lambda Functions)

Arrow functions provide a shorter syntax for writing functions.
 
Syntax
 
let functionName = (parameters): returnType => expression;
 
Example
 
let square = (num: number): number => num * num;
 
console.log(square(6)); // Output: 36
 
Key Points
 
• Uses => (fat arrow) instead of function keyword.
• Single-line functions don’t need {} or return keyword.
• Multi-line functions require {} and return.
 
Multi-line Example
 
let greet = (name: string): string =>
{
	return `Hello, ${name}!`;
};
 
console.log(greet("Pavan")); 

// Output: Hello, Pavan!
 
 
Summary Table
 



