class Student{
    public name:string
    protected age:number
    private phone:number
    constructor(name: string, age:number, phone:number){
      this.age=age
      this.phone= phone
      this.name= name
    }
    public display():void{
      console.log("Name: ",this.name)
      console.log("Age: ", this.age)
      console.log("Name: ",this.phone)
    }
  }
  let a= new Student("Sam Surya",21,8939149950)
  a.display() //possible
  console.log(a.name) //possible because public
  //console.log(a.phone)