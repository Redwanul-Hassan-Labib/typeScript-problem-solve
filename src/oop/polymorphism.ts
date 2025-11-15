//todo polymorphism ===> eta bohirupi kaj bebohar krbe.

class Person {

    getPerson(){
        console.log(`tumi normal person tai tmi 8 hours ghumao`)
    }
}
class Student extends Person {

    getPerson(){
        console.log(`tumi normal person tai tmi 7 hours ghumao`)
    }
}
class Programmer extends Person {

    getPerson(){
        console.log(`tumi normal person tai tmi 6 hours ghumao`)
    }
}

const getUserPerson = (pera: Person)=>{
    return pera.getPerson()
}

const result = new Person()
const result2 = new Student()
const result3 = new Programmer()

getUserPerson(result)
getUserPerson(result2)
getUserPerson(result3)



//! jkhn onk perameter thakbe tkhn ki vabe kaj krbe.

class UserPerson {

    getPerson(){
        return 0;
    }
}
class Pie extends UserPerson {
    redues : number;
    
    constructor(redues: number){
        super()
        this.redues= redues

    }
    getPerson():number{
        return Math.PI * this.redues * this.redues;
    }
}
class Rectangle extends UserPerson {
    height: number;
    width: number;

    //? height * width
    
    constructor(height: number, width: number){
        super()
        this.height = height;
        this.width = width

    }
    getPerson():number{
        return this.height * this.width
    }
}

const getUserResult = (pera: UserPerson)=>{
    return pera.getPerson()
}

const UserResult = new UserPerson()
const UserResult2 = new Pie(3.75);
const UserResult3 = new Rectangle(5, 6);


console.log(getUserResult(UserResult))
console.log(getUserResult(UserResult2))
console.log(getUserResult(UserResult3))

//! polymorphism holo ek ekta method diye ek somoy ek rokom kore uotput ber hoy.


