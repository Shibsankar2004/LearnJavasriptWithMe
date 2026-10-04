//Memory
//two type hoy ----Stack,heap
//stack use primitive data and heap use non primitive

//stack(primitive),Heap (non primivtive)example---

let myName="Shib Sankar Dandi"
let anotherName=myName
anotherName="Shibu Dandi"

// console.log(myName);
// console.log(anotherName);


//Heap (non primivtive)example---

let userOne={
    email:"Shibsankar@gmail.com",
    upi:"user@ybci"
}
let userTwo=userOne
userTwo.email="dandi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


