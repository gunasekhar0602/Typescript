// 1) Number
let num:number=20;
let price:number=201.11;

console.log(num);      // 20
console.log(price);    // 201.11


console.log(typeof num);    // number
console.log(typeof price);  // number


// 2) Strings
let Name: string ="Apple"
let Mobile:String="Iphone"
let MobileName: string=`Hello ${Name} ${Mobile}`

// Adding two strings, for that we need the backlit symbol. Here we are parameterizing.

console.log(MobileName);     //---› Hello Apple Iphone */




// 3) Boolean
let isIphone: boolean=true
let isbad: boolean=false
console.log("isIphone", isIphone)       // is iPhone ? true
console.log("isbad ?", isbad)            // isbad? false




// 4) Null
let emptyvalue:null=null
emptyvalue=10

// Type safety, once the value is null means then it will not allow other values

console.log(emptyvalue)         // null


// 5) Undefined
Represents a variable declared but not assigned (let y; → y is undefined).
 
let age: undefined=undefined
age=10

//typesafety, '10' is not assignable to type 'undefined'
console.log(age) 




// 6) Any
//A flexible type that allows any value (disables TypeScript checks).
//Avoid using unless necessary (let z: any = "Hello"; z = 10;).
 
// This will lose the type safety benefit.

let age : any=1 
console.log(age)         // 1
console. log(typeof age)       // number

age="one"
console. log(age)    // one
console.log(typeof age)       // string


age=true
console.log(age)      // true
console.log(typeof age)         // Boolean 






// 7) Union Type
//Allows multiple types for a variable (let id: string | number = "123";).
 
let score: number | string | boolean
score=true
console.log(score)

score="Apple"
console.log(score)

score=1
console. log(score)

score=null
console.log(score)         
// not allowed as this is an null datatype



// 8) Void
//Used for functions that don’t return anything
(function log(): void { console.log("Hi"); }).

// Void is nothing but the function not returning anything and void is optional.


function sum(): void
{
	console.log(10-20)
}
sum ()          // -10


function sum (a: number, b: number): number
return (a+b)
{
let res: number = sum (10,20)
}
console.log(res)          // 30
