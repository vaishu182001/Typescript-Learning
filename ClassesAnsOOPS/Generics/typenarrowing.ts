function printAll(strs: string | string[] | null):void {
   
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


  //using in operator narrowing 
  interface User{
    name:string,
    id:number
  }
  interface Admin{
name:string,
id:number,
isadmin:boolean
  }
 
  const examplefunc=(value:User|Admin)=>
  {
        if("isadmin" in value){
            console.log("The Admin is there "+value.isadmin);
        }
  }
  