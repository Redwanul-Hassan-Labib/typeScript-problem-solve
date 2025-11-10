//TODO type of interface explore.

type Adduser = {
    name: string
    age: number
} //! normal type 


const user:Adduser = {
    name:"redwan",
    age: 23
}

console.log(user);

interface IaddUser {
    name: string,
    age : number
} //! interface type

const useId : IaddUser ={
    name: "Labib",
    age : 23
}

console.log(useId.name.toUpperCase(), useId.age);

type Add = (num1:number, num2: number) => number; //!  normal type function

interface Iadd {
    (num1: number,
    num2:number): number
}

const userName:Iadd = (num1, num2)=> {
    return num1+ num2
}

console.log(userName(2,4));


const friend:iFriend = ["A", "B" , "C"]

console.log(friend);

interface iFriend {
    [index:number] : string; //! using interface
    
}


