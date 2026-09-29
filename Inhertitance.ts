// Inheritance

class Car
{
    carname:string;
    carcolor:string;
    carnumber:number;


    constructor(cname:string,ccolor:string,cnumber:number)
    {
        this.carname=cname;
        this.carcolor=ccolor;
        this.carnumber=cnumber
    }

    start()
    {
        console.log("Car start")
    }

    carstop()
    {
        console.log("Car stop")
    }

    cardetails()
    {
        console.log(`car name is ${this.carname}, 
            Car color is ${this.carcolor}, car number is ${this.carnumber}`)
    }
}


class TATA extends Car
{
    carorigin:string

    constructor(cname:string,ccolor:string, cnumber:number,corigin:string)
    {
        super(cname,ccolor,cnumber)
        this.carorigin=corigin
    }

    
    start()
    {   
        console.log("Tata car start")
    }

    // For calling the paraent class by using th child object
    callparentclass()
    {
        super.start()
    }


}

let tata=new TATA("Tata","Black",1,"India")

console.log(tata.start()) // Child class

console.log(tata.callparentclass())   // parent class
