//todo type of inheritance. eta holo same items thakle ekta common class a neya jay. sete kei inheritance bole

//! common class and constructor create 

class common {
     name: string;
    age: number;
    className: string;
    constructor(name: string, age: number, className: string) {
        this.name = name;
        this.age = age;
        this.className = className;
    }

    userPickUp(){
        console.log(`this user name is ${this.name} and this class name ${this.className} and he ${this.age} year old`);
    }
    
}


class User extends common {
    
}

const result = new User("Redwan" , 23 ,"Honers 3ed year")

result.userPickUp()


// next part opening 

class Teacher extends common {
    // name: string;
    // age: number;
    // className: string;
    designation : string;
    constructor(name: string, age: number, className: string , designation: string) {
        super( name, age,  className)
        this.designation = designation;
    }

    UserPiker(){
        console.log(`this user name is ${this.name} and this class name ${this.className} and he ${this.age} year old. this post is ${this.designation}`);
    }

   
}

const resultTeacher = new Teacher("Redwan" , 23 ,"Honers 3ed year", "teacher")

resultTeacher.UserPiker()