//todo ekhne loop niye kaj krbo.

const arrOfNumber: number[] = [1,2,3,4];

const arrOfString:string[] = arrOfNumber.map((user)=>user.toString())

console.log(arrOfString);

type Area = {
    height : number;
    weith: number;
}

type AreaString<T> ={
    [key in keyof T]: T[key]
}

const DynamicArea:AreaString<{height: number; weith: string}> = {
    height : 20,
    weith : "50"
}

console.log(DynamicArea);