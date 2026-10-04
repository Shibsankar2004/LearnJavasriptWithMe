 class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}sankar`
    }
    set password(value){
        this._password=value
    }
 }
 const Shib=new User("shib@gmail.com","shib")
 console.log(Shib.password);
 console.log(Shib.email);
 
 