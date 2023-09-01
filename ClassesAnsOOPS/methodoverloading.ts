class  MethodOveloading{

    constructor(){

    }
     addNum(num1:number,num2:number):void{
      let sum:number=num1+num2;
      console.log(sum);
   }
    
}
const obj1=new MethodOveloading();
obj1.addNum(2,4);

function addNum(num1:number,num2:number,num3:number):void{
    let sum:number=num1+num2+num3;
 }
console.log(addNum(2,4,6));



