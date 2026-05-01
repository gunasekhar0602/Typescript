//Method overloading

// Creating class
// class classname
class Calculator
{

//constructor overloading
// default constructor 
constructor ()

// parameterized constructor
//If a constructor which is taking parameters is called as parameterized constructor.
constructor (a:number, b:number)


// we should cover all the mentioned constructors.
constructor (a?:number, b?:number)
{
	if(a!==undefined && b!==undefined)
	{
		console.log( 'sum of a and b:',a+b)
	}
	else
	{
		console.log('Default constructor called')
	}
}

// method overloading
	add(a:number, b:number):number;
	add(a:number, b:number, c:number):number


// we should cover all the methods

	add(a:number,b:number,c?:number):number
	{
		if(c!==undefined)
		{
			return(a+b+c)
		}
		else
		{
			return(a+b)
		}
	}
}

let cal1=new Calculator()
//Output- Default constructor called

let cal2=new Calculator(1,2)
//Output-3

console.log(cal1.add(1,2))
//Output-3

console.log(cal1.add(1,2,3))
//Output-6


//Another example

//Create class
class Engagement
{

//Create constructor
constructor()
{
}

//Create methods
// methodname():datatype;
	addpermission():void;
	addpermission(admin:string):string;
	addpermission(admin:string,copy:string):string;
	addpermission(admin:string,copy:string,archive:string):string;

//we should cover all the methods
// We can provide optional parameters so that we can cover all methods
	addpermission(admin?:string,copy?:string,archive?:string):string
	{
		if(admin!==undefined && copy!==undefined && archive!==undefined)
		{
			return('user is having all permissions')
		}
		if (admin!==undefined && copy!==undefined)
		{
			return('user is having admin and copy permissions')
		}
		if(admin!==undefined)
		{
			return('user is having admin permissions')
		}
		else
		{
			return('user is not having permissions')
		}
	}
}

//Create object
let permission =new Engagement()

console.log(permission.addpermission( ))
//Output - user is not having permissions

console.log(permission.addpermission('admin' ))
//Output - user is having adminpermission

console.log(permission.addpermission( 'admin', 'copy'))
//Output - user is having admin and copy permissions

console.log(permission.addpermission( 'admin', 'copy', 'archive'))
//Output - user is having all permissions

