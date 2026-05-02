class Person
{
    // public property - accessible anywhere
    public name:string;

    // protected property - accessible with in class anf with in child class
    protected age:number;

    // private property - accessible only with in class
    private salary:number;


    constructor(name:string,age:number,salary:number)
    {
        this.name=name;
        this.age=age;
        this.salary=salary
    }

    diaplayinfo()
    {
        console.log(this.name)
        console.log(this.age)
        console.log(this.salary)
    }
}


class EMPLOYEE extends Person
{
    private employeeID:number;


    constructor(name:string,age:number,salary:number,employeeID:number)
    {
        super(name,age,salary)
        this.employeeID=employeeID;
    }

    employeedetails()
    {
        console.log(this.name)  // accessible
        console.log(this.age)  // accessible

        // not accessible as salary is private and only accessbile with in the class Person
        // console.log(this.salary) 
        
        // accessible as the employeeID is private and it is declared in the inside the same class
        console.log(this.employeeID)
    }
}

let emp1=new EMPLOYEE('Dhoni',23,111,1)

emp1.diaplayinfo()
// Dhoni
// 23
// 111

emp1.employeedetails()
// Dhoni
// 23
// 1

console.log(emp1.name); // accessible

// console.log(emp1.age);  // not accessible

// console.log(emp1.salary);// not accessible

// console.log(emp1.employeeID); // not accessible
