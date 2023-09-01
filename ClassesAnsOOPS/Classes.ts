class User{
    public name:string;
     private address:string;
    country:string="";
    constructor(name:string,address:string)
    {
        this.name=name;
        this.address=address;
    }
}
const User1=new User("Vaishnavi","Hyderabd");
User1.country="India";
//User1.address

export{}