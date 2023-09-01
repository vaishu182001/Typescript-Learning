

//using type aliasing 
type User={
    name:string;
    address:string;
    userid: number;
}
function fetchDetails(userdetail:User){
    console.log("THE NAME OF THE USER IS:"+userdetail.name);
}
const userd:User={name:"Vaishnavi",address:"London",userid:23453};
fetchDetails(userd);
// readonly keyword

//just add the readonly keyword in the custom type declaration
//?: if you may want to give the value or if thats optional
//Combining the types decalred individually
type CardName=
{
    cardname:string
};
   
type CardDetails={
    cardno:number
    cardholdername:string
};
type Cardvalidity=CardDetails& CardName&{
    cardexpiryyear:number
}

export{};