//todo static ===> static je vabe kaj kore ekhn kono change kora jay nah. ekhn sob data ek jayga theke ase.


//! static korar age emon hbe . 

// class Counter {
//      count: number = 0;

//     increment(){
//        return (this.count =  this.count + 1)
//     }
//     decrement(){
//         return ( this.count = this.count - 1)
//     }
// }

// const result = new  Counter()

// console.log(result.increment())
// console.log(result.increment())
// console.log(result.increment())

// const result1 = new  Counter()

// console.log(result1.increment())
// console.log(result1.increment())
// console.log(result1.increment())
// console.log(result1.increment())
// console.log(result1.increment())

//? 1,2,3, 1.2,3,4,5

//! eta static korar pore emon asbe.


class Counter {
    static count: number = 0;

    increment(){
       return (Counter.count =  Counter.count + 1)
    }
    decrement(){
        return ( Counter.count = Counter.count - 1)
    }
}

const result = new  Counter()

console.log(result.increment())
console.log(result.increment())
console.log(result.increment())

const result1 = new  Counter()

console.log(result1.increment())
console.log(result1.increment())
console.log(result1.increment())
console.log(result1.increment())
console.log(result1.increment())

//? 1,2,3,4,5,6,7,8