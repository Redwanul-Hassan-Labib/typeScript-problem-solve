//todo create a generic  function.



const genericFunction = <T> (value:T)=>{
    return[value]
}

const resultString =  genericFunction("Redwan Bhai");
const resultNumber = genericFunction(160);
const resultboolean = genericFunction(true);

//! create a tople generic function


const topleGenericFunction = <T,X,Z> (number1 : T , number2: X, number3: Z)=>{
    return[number1 , number2, number3]
}


const result = topleGenericFunction(2, "this number", true)

console.log(result);



const commonFunction = <T> (value: T)=>{
    return{
        course: "next level web development",
        ...value
    }
}

const Redwan  = {
    id: 1,
    name: "redwan",
    age:23,
    isPen: true,
    isBike: false,
    isEducated: true,
}

const Kazi = {
    id : 2,
    name: "Kazi Sherwear",
    age: 35,
    isPen : true,
    isCar: false,
    profession: "Teacher",
}


const resultTime = commonFunction(Kazi);
const resultTime2 = commonFunction(Redwan);

console.log(resultTime);
console.log(resultTime2);

