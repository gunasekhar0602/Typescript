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
//Represents a variable declared but not assigned (let y; → y is undefined).
 
let ages: undefined=undefined
ages=10

//typesafety, '10' is not assignable to type 'undefined'
console.log(age) 




// 6) Any
//A flexible type that allows any value (disables TypeScript checks).
//Avoid using unless necessary (let z: any = "Hello"; z = 10;).
 
// This will lose the type safety benefit.

let agess: any=1 
console.log(agess)         // 1
console. log(typeof agess)       // number

agess="one"
console. log(agess)    // one
console.log(typeof agess)       // string


agess=true
console.log(agess)      // true
console.log(typeof agess)         // Boolean 






// 7) Union Type
//Allows multiple types for a variable (let id: string | number = "123";).
 
let scores: number | string | boolean
scores=true
console.log(scores)

scores="Apple"
console.log(scores)

scores=1
console.log(scores)

scores=null
console.log(scores)         
// not allowed as this is an null datatype



// 8) Void
//Used for functions that don’t return anything
//(function log(): void { console.log("Hi"); })

// Void is nothing but the function not returning anything and void is optional.


function sum(): void
{
	console.log(10-20)
}
sum ()          // -10



