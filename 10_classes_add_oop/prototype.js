// let myName="hitesh   "
// let mychannel="chai   "
// console.log(myName.trueLength);

let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log('Spidy power is ${this.spiderman}');
        
    }
}
Object.prototype.Shib=function(){
    console.log(`shib is present in all object`);
    
}
Array.prototype.heyShib=function(){
    console.log(`Shib says hello`)
}

//heroPower.Shib()
// myHeros.Shib()
// myHeros.heyShib()
//heroPower.heyShib()


//inheritance
const User={
    name:"chai",
    email:"chai@google"
}

const Teacher={
makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
     makeAssignment:'Js assignment',
     fullTime:true,
     __proto__:TeachingSupport
}
Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Shib   "
 String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);

    
}
anotherUsername.trueLength()

"sankar".trueLength()
"animesh".trueLength()