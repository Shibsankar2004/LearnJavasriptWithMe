 const user={
    username:"Shib Sankar",
    price:67788,
    welcomeMessage:function () {
        console.log(`${this.username},welcom to website`)
        console.log(this);
    }
 }
//  user.welcomeMessage()
//  user.username="Sam"
//  user.welcomeMessage()
//  console.log(this)

//  function chai(){
//     let username="shib"
//     console.log(this.username);
//  }
//  chai()

// function code(){
//     console.log(this);
    
// }
// code();

// const chai=function(){
//     let username="Shib"
//     console.log(this.usernam);
// }
// chai()

const chai=()=>{
    let username="Shib"
    console.log(this.usernam);
    console.log(this)
}
//chai()
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,6));

// const addTwo=(num1,num2)=>  num1+num2
// const addTwo=(num1,num2)=>  (num1+num2)
const addTwo=(num1,num2)=>( {usernam:"Shib Sankar"})
console.log(addTwo(3,6));


const myarray=[2,65,7,8]
myarray.forEach(()=>{})