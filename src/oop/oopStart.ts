//todo ajke theke amra oop er class suru krlam.

// class Pet {
//     name: string;
//     voice: string;
//     meal: string;

//     constructor(name:string, voice: string, meal:string ) {
//         this.name = name;
//         this.voice = voice;
//         this.meal = meal;
//     }
//     makeSound(){
//         console.log(`${this.name} dake ${this.voice}`);
//     }

   
// }

class Pet {
//    public name: string;
//    public voice: string;
//    public meal: string;

    constructor(public name:string, public voice: string, public meal:string ) {
        // this.name = name;
        // this.voice = voice;
        // this.meal = meal;
    }
    makeSound(){
        console.log(`${this.name} dake ${this.voice}`);
    }

   
}


const dog = new Pet("kukur", 'ghew ghew','meat')

const cat = new Pet("biral" , 'mew mew ', "maser kata" )

dog.makeSound()

 dog.makeSound()
 cat.makeSound()

