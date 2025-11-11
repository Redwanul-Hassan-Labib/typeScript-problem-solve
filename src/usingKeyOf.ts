//todo using keyof === type operator.


type Home = {
    name:string;
    HW: string;
    schoolname: string;
    collegeName: string;
    className: number;
}

type UseHome = "name" | "HW" | "schoolname"| "collegeName"| 7;  //? first  method this vary easy and old method.

type InHome = keyof Home; //! this method this new and vary useful.


const house:InHome = "HW";

const House:Home = {
    name: "Akash vila",
    HW: "Home Work",
    schoolname:"KKKMS",
    collegeName: "GGC",
    className: 12
}


//console.log(house);

//todo keyof  === type is  containt using

type SelfData ={
    name: string;
    age: number;
    location: {
        city: string;
    };
}

const self = {
    name: "Redwan Labib",
    age: 23,
    location: {
        city: "Dhaka"
    }
};


const name = self["name"]
const age = self["age"]
const location = self.location.city

//console.log(name, age, location);

const product = {
    name: "HP"
}

const student = {
    id: 1,
    className: "one",
    age: 6
}

const selfFunc = <T> (obj: T, key: keyof T )=>{
    return obj[key]
}

const result = selfFunc(self, "name")
const result2 = selfFunc(product, "name")
const result3 = selfFunc(student, "className")
console.log(result, result2, result3);