//todo this type guar.  using typeof and in .

type UserType = string | number

const typeOfUser = (num1: UserType , num2: UserType)=>{
    // return num1+ num2
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    } else {
        return num1.toString() + num2.toString()
    }
}

const result = typeOfUser( "5" , 5) //? ekhne kaj krlam je  string and number is same find value; 
console.log(result);

//! this implement is in  type guard use. 


type Editor = {
    name: string
}

type Admin = {
    name: string;
    role : "Admin"
}

const getUserInfo =(user: Editor | Admin)=>{
    if ("role" in user ) { 
        console.log(`this user name ${user.name} and this role is ${user.role}`); //! ekhen amra in type er use krci ja diya shoh vabe amra guard krte pari ei kaj ta thik ace bah thik nai.
    } else { 
        console.log(`this user name ${user.name}`);

    }
} 

const finalResult = getUserInfo( {name : "normal"})
