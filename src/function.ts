//! funcion type 


const func = (input: number | string ): string | number  | undefined => {
     if (typeof input === "number") {
        return input * 5
    }else if (typeof input === "string") {
        const [value] = input.split(' ')
        return Number(value) * 10
    }
}


const result1 = func(30)
console.log(result1);

const result2 = func("25 kg")
console.log(result2);