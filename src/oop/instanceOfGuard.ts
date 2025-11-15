//todo instance og type guard / type  narrowing.

class Person {
    name: string
    constructor(name:string) {
        this.name= name;
    }
    doSleep(numberOf : number){
        console.log(`${this.name} protidin ${numberOf} hours ghumay`)
    }
}

class Student extends Person {
    constructor(name:string) {
        super(name);
    }
    doStady(numberOf : number){
        console.log(`${this.name} protidin ${numberOf} hours porasuna kore`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    doTeching(numberOf : number){
        console.log(`${this.name} protidin ${numberOf} hours class ney`)
    }
}
//! Function type guard

const getStudentInfo = (user:Person)=>{
    return user instanceof Student; //? this user is student
}
const getTeacherInfo = (user:Person)=>{
    return user instanceof Teacher; //? this user is teacher
}

const getInfo = (user:Person)=>{
    if (getStudentInfo(user)) {
        user.doStady(6)
    }else if (getTeacherInfo(user)) {
        user.doTeching(4)
    }else{
        user.doSleep(8)
    }
}
//!eta normal way eta sobai use kore.

// const getInfo = (user:Person)=>{
//     if (user instanceof Student ) {
//         user.doStady(6)
//     }else if (user instanceof Teacher) {
//         user.doTeching(4)
//     }else{
//         user.doSleep(8)
//     }
// }

const student1 = new Student("Mr. Student")
const tearch1 = new Teacher("Mr. teacher")
const person1 = new Person("Mr. person")

getInfo(student1)
getInfo(tearch1)
getInfo(person1)

