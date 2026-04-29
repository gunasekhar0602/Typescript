14. Typescript objects -

What is an Object?
 
An object is a collection of key-value pairs.
 
It contains:
 
• Properties (variables)
 – e.g., name, age, salary
 
• Methods (functions) 
– e.g., getDetails(), setDetails()
 
Objects represent real-world entities like Employee, Student, Product, etc.

Example: Employee
 
let employee = 
{ 
	name: "John",
 
	salary: 50000,
 
	job: "Engineer",
 
getDetails: function ()
{
 	return `${this.name} is a ${this.job} earning ${this.salary}`;
 }
 };
 
Accessing properties:
 
• Dot notation → employee.name
 
• Bracket notation → employee["name"]
 
Modifying:
 
employee.job = "Manager";
 
 
 
Different Ways to Create Objects in TS/JS
 
1. Using object type (JS/TS)
 
2. Inline Type Object (TS)
 
3. Using type aliases (TS)
 
4. Using Classes (JS/TS)


1. Using object type (JS/TS)
 
Basic way without strict typing:
 
let employee: object = 
{
 	name: "John",
 	age: 30,
 	job: "Engineer"

getdetails:function()
{
	console.log(this.name, this.age, this.job)
	 return `${this.name} is a ${this.age} earning ${this.job}`;

}
};

// accessing object - approach 1(using .notation)
console.log(employee.name)
John
console.log(employee.age)
30
console.log(employee.job)
Engineer

console.log (employee.getdetails());
//john is a engineer earining 50000


// accessing object - apprach 2 (using bracket notation)

console.log(employee["name"], employee["salary"], employee["job"]) 
// john 50000 engineer

console.log(employee[" getdetails"]()); 
// john is a engineer earining 50000

// modify the value
employee. job="Manager";
console.log(employee.job)
// Manager

But we can’t access properties directly unless we define the structure or use any.
 
 
 
2. Inline Type Object (TS)
 
Here, we define the structure while creating the object.
 
let student:
{
 	name: string;
 	age: number;
 	grade: string;
 	getSummary: () => string;
 } =
{
 	name: "Scott",
 	age: 15,
 	grade: "A",
 	getSummary: function ()
 	{
 	return`${this.name} is ${this.age}years old and scored grade $					{this.grade}`;
 	}
 };

console.log(students.get summary ());
 
Limitation: Need to repeat the type structure for each object.

3. Using type aliases (TS)
 
Reusable type definitions.
 
type Product =
{
 	name: string;
 	price: number;
 	getInfo: () => string;
 };
 
Then use it for multiple objects:
 

let book1: product =
{
	name: "learn Typescript", 
	price: 344,
	getInfo: function()
	{
		return ${this.name} cost${this.price} ;
	}
};
let book2=
{
	name: "learn Python"
	price: 222,
 	getInfo: function()
	{
		return "#{this.name} cost ${this.price} ;
	}
};
console.1og(book1.getInfo());
// learn Typescript cost344

console.log(book2. getInfo());
// learn Python cost 222

 
4. Using Classes (JS/TS)
 
Blueprint for creating multiple objects with same structure and behaviour
Create class
class Person
{
	ssn:string;                     
	firstname:string;   
	lastname:string;

Constructor will assign the data to the class variable 
Constructor will never return the value
Constructor will be involved automatically at the time of object creation of class

Create constructor 
constructor(ssn: string, 
	firstName: string,
	lastName: string)
{
	this.ssn=ssn
	this.firstname=firstname
	this.lastname=lastname
}

We need to to invoke a method by using object
Method can return the value
Methods
getFullName(): string
{
 	return `${this.firstName} ${this.lastName}`;
}
 
getDetails(): string
{
 	return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
 }
 
}

Create object:
 
Using new keyword we can create we can create multiple objects. Objects are independent
Objects never share the properties of methods and constructors. Objects will acquire their own copy of the variables, constructors and methods

let person1 = new Person("123", "Dhoni", "Apple");
console.log(person1.getDetails());
 
// Out put = ssn:123, name: Dhoni Apple
 




Summary Table
 
