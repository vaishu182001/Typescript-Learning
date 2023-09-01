function userDetails<Type>(val:Type):Type {
   return val;

}

userDetails(3);
userDetails("Vaishnavi");

//Use of generics in terms of arrays
function exampleArrays<T>(values:T[]):T{
    return values[3];
}
const values:Array<String>=["cats","dogs","rats"];
exampleArrays(values);

//arrow fucntion and generics
let gen=<T>(value:T):T=>{
   return value;
}

//generics using extends keyword.
function genExanple<T,U extends string>(unum:T,name:U):void{
       console.log("The val of unum : "+unum);
       console.log("The val of name : "+name);
       
}