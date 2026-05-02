
// 1) Basic interface

// interface interfacename
interface Cricketers
{
    name:string,
    age:number;
};

const Cricketer1:Cricketers=
{
    name:"Dhoni",
    age:30
}



// 2) Optional property interface

interface employees
{
    empid:number;
    empsal:number;
    empad?:string;
}

const employee1:employees=
{
    empid:1,
    empsal:111,

    // empad:"AD"  // optional
}


// 3) Readonly property interface

interface Countries
{
    readonly contryname:string;
    countryid:number;
}

const country:Countries=
{
    contryname:'India',
    countryid:1
}
// country.contryname="Australia"   // not able to assign because it is a readonly property

country.countryid=2  // able to assign the value


// 4) Interface for function

interface Greet
{
    (place:string):string
}
const sayplace:Greet=(place)=>
{
    return `hello,${place}`
}