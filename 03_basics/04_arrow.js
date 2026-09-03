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
 console.log(this)

//  function chai(){
//     let username="shib"
//     console.log(this.username);
//  }
//  chai()