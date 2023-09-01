abstract class University{
     public uname:string="VIT -AP ";
     public uaddress:string="Amaravati-AP";
     abstract printdetails():void;
}
class Vit extends University{
    constructor(public dept:string,public spec:string,public seats:number)
    {
      super();
    };
    printdetails(): void {
        console.log("The University name is : ${this.uname}");

    }

}
const obj =new Vit("SCOPE","Big Data",34);
obj.printdetails();