function hero(){
    return "Thor";
}
let h:string=hero();
hero();

//using parameters
function mutliply(val :number,bynum :number){
    return val*bynum;
}
mutliply(5,4);

//use of arrow function
let ans=(val:number,addnum:number)=>{
    if(val%2==0)
    {
        return val*10+addnum;
    }
    else{
        return val*1000+addnum;
    }

}
const res=ans(40,10);
console.log("The result is"+ res);

//