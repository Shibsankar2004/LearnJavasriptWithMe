//singleton
//object.create

//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Shib Sankar",
    "full name":"Shib Sankar Dandi",
    [mySym]:"myKey1",
    age:20,
    location:"moyna",
    email:"Shib@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="dandi@gmail.com"
// Object.freeze(JsUser)
JsUser.email="sankar@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


