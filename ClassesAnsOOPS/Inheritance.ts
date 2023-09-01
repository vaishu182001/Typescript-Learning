class Vehicle{
    
    constructor(public vehictype:string,public  vehicname:string)
    {
        
    }
    printDetails():void{
        console.log("The vehicle type is :"+this.vehictype);
        console.log("The vehicle name is :"+this.vehicname);

    }
}
const vehic1=new Vehicle("Two wheeler","Scooty");
vehic1.printDetails();

class Scooty extends Vehicle{
    constructor(public scootyname:string,public scootymodel:number)
    {
        super("Two Wheeler","Scooty");
    }
     printScootyDetails():void{
        console.log("The Vehicle Type is"+this.vehictype);
        console.log("The Vehicle name is"+this.vehicname);
        console.log("The Vehicle Scooty Type is"+this.scootyname);
        console.log("The Vehicle Scooty model is"+this.scootymodel);

     }

}
const scoo=new Scooty("Honda Activa",110);
scoo.printDetails();
scoo.printScootyDetails();
