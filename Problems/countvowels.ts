const st:string="vaishnavi";
let c:number=0;

function countVowels(st:string):number{
    for(let i=0;i<=st.length-1;i++)
    {
        if(st[i]=="a"|| st[i]=="e"||st[i]=="i"||st[i]=="o"||st[i]=="u")
        {
            c+=1;
        }
        else
        {
            continue;
        }
    }
    return c;
}
const answr:number=countVowels(st);
console.log("The number of vowels in the string are : "+answr);
