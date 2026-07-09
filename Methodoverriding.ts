// Inheritance
// Creating class
// class classname
class Car
{
//Assigning properties
// property with datatype of property
	carname:string;
	carcolor:string;
	carmodel:string;

//Creating constructor
// constructor(parameter:datatype)
constructor(cname:string, ccolor:string, cmodel:string)
{
	// this represents class
	// this.classproperty=constructor parameter;
	this.carname=cname;
	this.carcolor=ccolor;
	this.carmodel=cmodel
}
// creating method
start()
{
	console.log('car started')
}
stop()
{
	console.log('car stoped')
}
cardetails()
{
	console.log(`car name is ${this.carname},
		car color is ${this.carcolor},
			car model is ${this.carmodel}`)
}
}

//Creating a child class

class TATA extends Car
{
	yearofmanufacturing:number;


// mention the parent class constructor parameters in the child class constructor anlong
//                with the child class constructor parameters

constructor(cname:string, ccolor:string, cmodel:string, yom:number)
{
	super(cname, ccolor, cmodel)
// super keyword invokes the parent class constructor. Super is a method.

	this.yearofmanufacturing=yom;
}

// Method override.
// When method is overrided the latest implementation will be called, which is from the child class.

start()   // this will invoke parent class method.
{
	console.log('Tata car started');
}

manufacture()
{
	console.log(`year of manufacturing:,${this.yearofmanufacturing}`);
}

cardetails()
{
	console.log(`car details: car name is ${this.carname},
		car color is ${this.carcolor},car model is ${this.carmodel},
		 car YOM is ${this.yearofmanufacturing}`)
}
};

//creating child class
class BMW extends Car
{
	yearofmanufacturing:number;


// mention the parent class properties in the child class constructor analog with the child class properties
constructor(cname:string, ccolor:string, cmodel:string, yom:number)
{
	super(cname, ccolor, cmodel) 
// super keyword invokes the parent class constructor. Super is a method.

	this.yearofmanufacturing=yom;
}

// Method override.
// When method is overrided the latest implementation will be called, which is from the child class.

start()
{
	console.log('BMW started')
}

manufacture()
{
	console.log(`year of manufacturing:,${this.yearofmanufacturing}`)
}

bmwcardetails()
{
	console.log(`car name is ${this.carname},car color is {this.carcolor},
car model is ${this.carmodel}, car YOM is ${this.yearofmanufacturing}`)
}
}

// Creating objects

let tata = new TATA('TATA', 'Black', 'Curve', 2025)

console.log(tata.carname);
//TATA

console.log(tata.carcolor);
//Black

console.log(tata.carmodel);
//Curve

console.log(tata.yearofmanufacturing);
//2025


tata.stop()
// car stoped      // Parent class

tata.start()
// it will take child class only if we are not using the super with parent class method at the child class method
// Tata car started    // child class

// it will take parent class method and child class method if we are using the super with parent class method at the child class method.
// car started          // parent class
// Tata car started    // child class


console.log( tata.cardetails());

// car details: carname is Tata, car colour is Black, car model is Curve, car YOM is 2025




//parent class variable is hold child class object
let tatacar: Car=new TATA ("TATA", "Black", "curve", 2025)
tatacar.cardetails(); 
//car name is TATA, car color is Black, car model is curve

tatacar.start();
// Tata car started... (child class)

//car.yom();
//error
//Not accesible. The method which is created in child which is not there in parent.
// yom () is created inside the child class but not there in the parent class

