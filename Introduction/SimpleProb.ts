let num:number=153;
let temp:number=num;
let sum:number=0;
while(num!=0){
  let r:number=num%10;
  console.log(r);
  sum=sum+(r*r*r);
  num=num/10;
}
console.log(sum);
if(temp==sum)
{
  console.log("Armstrong Number");
}
else{
  console.log("Not an Armstrong number");
}
export{}