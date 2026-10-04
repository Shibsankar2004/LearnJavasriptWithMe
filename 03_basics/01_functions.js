function saynyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("B");
}
//saynyName()
// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}
const result=addTwoNumber(7,9);
//console.log("results: ",result);


function loginUserMessage(uasername="nunu"){
    //if(uasername===undefined){
    if(!uasername){
        console.log("please enter a username");
        return
    }
    return `${uasername} just logged in`
}
 //console.log(loginUserMessage("Shib sankar"));
 //console.log(loginUserMessage());


 function calculateCartPrice(...num1){
    return num1;
 }
 //console.log(calculateCartPrice(1000,666,899,6677));
  function calculateCartPrice(val1,val2,...num1){
    return num1;
 }
 //console.log(calculateCartPrice(1000,666,899,6677));
 
const user={
    username:"Shib Sankar",
    price:100
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} ans price is ${anyobject.price} `);

}
handleObject({
    username:"rahul",
    price:2667
});
const myNewArray=[200,355,678]
function returnSecondValue(getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([345,788,899]));

