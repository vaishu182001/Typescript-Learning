//basically it is adding optional types for a single variable
const name: string| number="Vaishnavi";


type User={
    name:string
    dob:string
}
type UserDet={
    adminname:string
dob:string
}
 const uname:User|UserDet={
    name:"Vaishnavi",dob:"18/12/2001"

 }
 const adminuser:UserDet={
    adminname:"Vaishnavi",
    dob:"3/3/02"
 }


 //union types in 

 function checkAndProceed(val:string|number)
 {
   if(typeof val== "string")
   {
        console.log(val.toUpperCase());
     }
     else{
        console.log(val+100);
     }

 }
 checkAndProceed("This is an example");
//Array writing using the | symbol-union
 const example1:(string|number)[]=["v","b","W",1];

 let myname:"Vaishnavi"|"Madhavi";
  myname="Vaishnavi";


export{}