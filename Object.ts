/* 
Different Ways to Create Objects in TS/JS
 
1. Using object type (JS/TS)
 
2. Inline Type Object (TS)
 
3. Using type aliases (TS)
 
4. Using Classes (JS/TS)

 */
 
// 1. Using object type (JS/TS)
 
// Basic way without strict typing:
  let student =
{
	name:"Dhoni",
	age:30,
	score:44,
	class:"seven",
	getDetails:function(this:any)
	{
		console.log(this.name,this.age,this.class)
	}
}

console.log(typeof student)

console.log(student.getDetails())
// Dhoni 30 seven


// modifying the details
student.age=35

console.log(student.getDetails())
// Dhoni 35 seven




// 2. Inline Type Object (TS)
 
// Here, we define the structure while creating the object.
 
// Declaration object - key with datatype
let students:
{
	name: string;
	age: number;
	grade: string;
	getSummary: () => string
} =
{
 	name: "Scott",
 	age: 15,
 	grade: "A",
 	getSummary: function ()
 	{
 	return`${this.name} is ${this.age}years old and scored grade ${this.grade}`;
 	}
 };

console.log(students.getSummary());
 
//Limitation: Need to repeat the type structure for each object.

 
// 3. Using type aliases (TS)
// Reusable type definitions.
// Creating structue of object for once
type Product =
{
 	name: string;
 	price: number;
 	getInfo: () => string;
 };
 
//Then use it for multiple objects:
let book1: Product =
{
	name: "learn Typescript", 
	price: 344,
	getInfo: function()
	{
		return `${this.name} cost is ${this.price}` ;
	}
};
let book2=
{
	name: "learn Python",
	price: 222,
 	getInfo: function()
	{
		return `${this.name} cost is ${this.price}`
	}
};
console.log(book1.getInfo());
// learn Typescript cost344

console.log(book2.getInfo());
// learn Python cost 222





//4. Using Classes (JS/TS)
 
//Blueprint for creating multiple objects with same structure and behaviour
// Create class
class Person
{
	ssn:string;                     
	firstName:string;   
	lastName:string;

/*
 Constructor will assign the data to the class variable 
Constructor will never return the value
Constructor will be involved automatically at the time of object creation of class
 */

// Create constructor 
constructor(ssn: string, firstName: string, lastName: string)
{
	// this represents calss
	this.ssn=ssn,
	this.firstName=firstName,
	this.lastName=lastName
}

/* We need to to invoke a method by using object
Method can return the value
Methods */
getFullName(): string
{
 	return `${this.firstName} ${this.lastName}`;
}
 
getDetails(): string
{
 	return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
 }
 
}

/* 
Create object:
 
Using new keyword we can create we can create multiple objects. Objects are independent
Objects never share the properties of methods and constructors. Objects will acquire their own copy of the variables, constructors and methods
 */
let person1 = new Person("123", "Dhoni", "Apple");
console.log(person1.getDetails());
 
// Out put = ssn:123, name: Dhoni Apple
 

