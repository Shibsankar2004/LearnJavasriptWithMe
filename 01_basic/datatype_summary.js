// primitive(call by value)
//7 types:String,number,boolearn,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.8
const isLoggedIn=false

const outsideTemp=null
let userEmail;
 const Id=Symbol('123')
const anotherId=Symbol('123')

console.log(Id===anotherId);

//const bigNumber=23455667788n


//reference/non primitive
//array,objects,Functions

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name:"Shib",
    age:21,
}

 const myFunction=function(){
console.log("Hello World");

}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof score);
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof Symbol);
