const myNums=[1,2,3]
// const Mytotal =myNums.reduce(function(acc,currVal){
//     console.log(`acc:${acc} and currVal:${currVal} `);
    
//     return acc+currVal
// },0)

const Mytotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(Mytotal);
const shoppingCart=[
{
    itemName:"Js courses",
    price:3999
},
{
    itemName:"python courses",
    price:2999
},
{
    itemName:"data science courses",
    price:12000
},
{
    itemName:"web courses",
    price:7889
},
{
    itemName:"full stack courses",
    price:9999
}
]
 const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
