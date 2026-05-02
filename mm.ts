class Phone
{
    phonename:string;
    phonecolor:string;
    phonetype:string;

    constructor(pname:string,pcolor:string,ptype:string)
    {
        this.phonename=pname;
        this.phonecolor=pcolor;
        this.phonetype=ptype;
    }

    ringing()
    {
        console.log("phone is ringing")
    }

    silent()
    {
        console.log("phone is in silent mode")
    }
    
}

class IPHONE extends Phone
{
    year:number;


    constructor(pname:string,pcolor:string,ptype:string,y:number)
    {
        super(pname,pcolor,ptype)
        this.year=y
    }

    ringing()
    {
        console.log("iphone is ringing")
    }
}



class REDMI extends Phone
{
    country:string;

    constructor(pname:string,pcolor:string,ptype:string,pcountry:string)
    {
        super(pname, pcolor,ptype)
        this.country=pcountry
    }

    
    ringing()
    {
        console.log('Redmiphone is ringing')
    }
}



let iphone=new IPHONE('Iphone17','Black','Dispaly',2025)
let phone=new Phone('phone','blue','display')
console.log(iphone.ringing())
console.log(phone.ringing())

let redmi=new REDMI('redmi','red','display','India')

console.log(redmi.ringing())

