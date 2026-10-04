class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`UserName: ${this.username}`);
        
    }
   static createId(){
        return `123`
    }
}
const Shib=new User("Shib Sankar")
//console.log(Shib.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphene=new Teacher("Iphone","i@gmail.com")
// console.log(iphene);
iphene.logMe();
console.log(iphene.createId())