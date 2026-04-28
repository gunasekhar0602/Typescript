// 1) Scope of the variable
function exampleVariable()
{
    if(true)
    {
        // var is function scope it can be accesible in and out side of block
        var height='Height';

        // let is block scope it can be accesible in side the block
        let weight='Weight';

        // const is block scope it can be accesible in side the block
        const age='Age'


        console.log(height)       // accesible 
        console.log(weight)       // accesible
        console.log(age)          // accesible
    }
    console.log(height)           // accesible 
    // console.log(weight)        // not accesible
    // console.log(age)           // not accesible
}
exampleVariable();


// 2) Declaration of variable OR value assignment

// we can declare var variable without assignment
var b
console.log(b)  // undefined

// we can declare let variable without assignment
let d
console.log(d)  // undefined

// we cannot declare const variable without assignment

// At the time of declaration itself we have to assign the value
//const e           
//console.log(e)  // error - missing initializer


// 3) Redeclaration

// Redeclarion is possible with Var
var country:string="Australia";
console.log(country);

var country:string="India";
console.log(country);

// Redeclarion is not possible with let
let city:string='Delhi';
console.log(city)            // Cannot redeclare

let city:string='Mumbai';
console.log(city)

// Redeclarion is not possible with const
const state:string='NewDelhi';
console.log(state)                // Cannot redeclare

const state:string='Maharastra';
console.log(state)               // Cannot redeclare


// 4) Re intitalization

var score=30;
score=11;

let age=30;
age=22;

const pi=3.14;
pi=3.1419              // Can not change a constant


// 5) Hosting -

console.log(a);
var a=10;        // undefined

console.log(v);
let v=20         // Cannot access before intitalization

console.log(z);
const z=40      // Cannot access before intitalization 
