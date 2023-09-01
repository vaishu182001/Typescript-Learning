let strg:string="I am from Bangalore";
let starr: string[]=strg.split(" ");
console.log(starr);
let finalstr:string="";
for(let i=0;i<starr.length;i++)
{
    let tempstr:string=starr[i];
    let newstr:string="";
    for(let j=tempstr.length-1;j>=0;j--)
    {
        newstr=newstr+tempstr[j];
    }
    finalstr=finalstr+newstr+" ";
}
console.log("The final string is :" + finalstr);
export{}