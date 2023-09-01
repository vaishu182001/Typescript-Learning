interface UserDetails{
    name:string,
    address:string,
    userid:number
    printDetails():void
}
let user:UserDetails={name:"Vaishnavi",address:"London",
userid:23221,
printDetails:()=>{
    console.log("This is an interface example")
}
}

console.log(user.printDetails);

export{}