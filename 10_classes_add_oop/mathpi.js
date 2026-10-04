 const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
/*
 output=>{//pi value not changes possible
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai={
    name:'giner chai',
    price: 250,
    isAvailable:true,
    orderChai:function(){
        console.log("chai nhi bni");
        
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    //writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
    console.log(`${key}:${value}`);
}
}