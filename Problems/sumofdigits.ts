let num:number=543;
let sum:number=0;
while(num!=0)
{
    let r:number=num%10;
    sum=sum+r;
   num=Math.floor(num/10);
}
console.log("The sum of the digits is :"+sum);


export{}