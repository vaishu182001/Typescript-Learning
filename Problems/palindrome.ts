let s:string="nitin";
let ns:string="";
//console.log(s[0]);
for(let i=s.length-1;i>=0;i--)
{
    ns=ns+s[i];
}
if(ns==s)
{
    console.log("This is a palindrome");
}
else{
    console.log("This is not a palindrome");
}