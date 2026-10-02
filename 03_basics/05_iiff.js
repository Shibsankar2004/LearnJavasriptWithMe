//Immediately Invoked Functon Expreesion(IIFF)
// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()



(function chai(){
    //name iiff
    console.log(`DB CONNECTED`);
    
})();

(()=>{
    console.log(`db connected two`);
    
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Shib Sankar dandi")
