
// 1) Arithmetic Operators
/*
These operators perform basic mathematical operations.

• + (Addition): Adds two numbers → 10 + 5 = 15
 
• - (Subtraction): Subtracts one number from another → 10 - 5= 5
 
• * (Multiplication): Multiplies two numbers → 10 * 5 = 50
 
• / (Division): Divides one number by another → 10 / 5 = 2
 
• % (Modulus): Returns the remainder of division → 10 % 3 = 1
 
** (Exponentiation): Raises a number to a power → 2 ** 3 = 8
*/
let a: number=10
let b: number=20

if we are having multiple variables we can mention it in single statement

let c: number=20, d: number=40, e:string="Apple"

console.log(a+b)        // 30
console.log(a-b)           // -10
console.log (a*b)          // 200
console.log(a**b)         // 10000000000
console.log(a/b)           // 0.5
console.log(a%b)            // 10




// 2) Assignment Operators
/*  
Used to assign values to variables.
 
• += → x += 5 (same as x = x + 5)
 
• -= → x -= 5 (same as x = x - 5)
 
• *= → x *= 5 (same as x = x * 5)
 
• /= → x /= 5 (same as x = x / 5)
 
• %= → x %= 5 (same as x = x % 5)

 */
 
//3) Increment & Decrement Operators
 
//Used to increase or decrease a value by 1.
 
// ++ (Increment)

let x: number=10

x=x+1     // Or        X++                 
console. log(x)         // 11

// specify the variables and use operator

++x
console. log(x)          // 12



// x++ (Post-increment: First use the value, then increase it)

let x:number=10;

let result:number=x++
console.log(result)              // 10
Console.log(x)                    // 11


// ++x (Pre-increment: First increase, then use the value)
 
let x:number=10;
let result:number=++x
console.log(result)              // 11
Console.log(x)                    // 11

// -- (Decrement)
 
// y-- (Post-decrement: First use the value, then decrease it)
 
let x:number=10;

let result:number=x - -
console.log(result)              // 10
Console.log(x)                  // 9

// --y (Pre-decrement: First decrease, then use the value)

let x:number=10;

let result:number= --x
console.log(result)              // 9
Console.log(x)                  // 9

 
4) Relational/Comparison Operators
 
Used to compare values and return true or false.

• < (Less than) → 10 < 20 → true

• > (Greater than) → 10 > 20 → false
 
• <= (Less than or equal to) → 10 <= 10 → true
 
• >= (Greater than or equal to) → 20 >= 15 → true
 
• == (Equality check, only compares value) → 10 == "10" → true
 
• != (Not equal) → 10 != 20 → true
 
• === (Strict equality, compares both value and type) → 10 === "10" → false
 
• !== (Strict inequality) → 10 !== "10" → true
 


a=10
b=20

console.log(a>b).         // flase
console. log(a<b) //true 
console. log (a<=b) //true
console. log(a>=b) // flase
console. log(a==b) // flase
console. log(a!=b) //true
console. log(a===b) // flase

// difference between == (equality) and === (strict equality)

let num1: any=10
Let num2: any="10"
console. log(num1==num2)
    //true (only compare values)

console. log(num1===num2)
   //false (it compares the values along with the datatype)
 
5) Logical Operators
 
Used to combine multiple conditions.
 
• && (AND) → Returns true if both conditions are true
 
o Example: (x > 5 && x < 15) → true only if x is between 5 and 15
 
• || (OR) → Returns true if at least one condition is true
 
o Example: (x > 10 || y < 5) → true if any condition is true
 
• ! (NOT) → Reverses the condition (true → false, false → true)
 
o Example: !(x > 5) → If x > 5 is true, ! makes it false
 
 
let b1: boolean=true 
let b2: boolean=false

console.log(b1&&b2) // false 
console.log(b1||b2) // true
console. log(!b1) // false

We can also use the logical operators with combination of relation operators

console.log(20>1 &820>1) // True 
console.log(20>1 || 20>1) //  True

6) Ternary Operator (Conditional Operator)
 
A shortcut for if-else.
 
• Syntax:
 condition ? value_if_true : value_if_false;
 
• Example:
let age = 18;
 
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"

If age is 18 or more, it prints "Adult", otherwise "Minor".


syntax of Ternary Operator
first we have to specify the expression and (question mark)? result1 : result;
expression ? res1: res2;

>>>>>>> ef412c7def5d6bc0e765bd9b932cad6a83e18480
