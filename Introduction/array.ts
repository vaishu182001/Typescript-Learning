//Concept of Arrays
const superheroes:string[]=["Thor","Spiderman","Batman"];
superheroes.push("Captain America");
const names:Array<string>=["Ram","Shyam"]
names.push("Vaishnavi");
//custom types 
type details={
    name:string,
    address:string
}
const userDetails:details[]=[];
userDetails.push({name:"Vaishnavi",address:"SFO"});
console.log(userDetails);