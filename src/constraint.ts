//todo constraint means strictly rules bole deo ja extends krte hbe.


const commonFunction = <T extends {id:number, name:string, age:number}> (value: T)=>{
    return{
        course: "next level web development",
        ...value
    }
}

//! ekhne je extends er  por likhci ogula hoilo ami strictly shorto  dici.

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

const Mithun = {
    ispen  : true,
}//! oi jonno  ekhne vul asce. so ekhne jodi ami idm name and age ditam thle error asto nah.


const resultTime = commonFunction(Kazi);
const resultTime2 = commonFunction(Redwan);
const resultTime3 = commonFunction(Mithun);

console.log(resultTime);
console.log(resultTime2);
console.log(resultTime3);