//javascript Execution Context
//{}---> Global Execution Context <----this
//1)Gobal Execution Context
//2) Function Execution context
//3)Eval Execution context

let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,34)
console.log(result1);
console.log(result2);

//1)GLOBAL EXECURTION<--THIS
//2)MEMORY PHASE
////val1---undefined
////val2---undefine
////addnum---defination
////result -undefine
////results--undefine


//3)Execution phase
//val1<----10
//val2<----5
//addNum-------- variable environment++Exection thread----1)memory phases(val1-->undefined
// val2--->undefine
// total---->undefine)  2)Execution control(num1--->10
//num2--->5 total--->15)