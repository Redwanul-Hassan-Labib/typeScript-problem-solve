//TODO using a   type of Assertion

//? create kologram to KG

const typeAssertion = (value  : string | number): string | number | undefined | null =>{

    if (typeof value === "number") {
        return value * 1000
    }else if (typeof value === "string") {
        const [input] = value.split(" ")
        return `Converted Value is ${Number(input)* 1000}`
        
    }
}

const output = typeAssertion(2) as number //! amra ekhne as a diye assertion type fined krci.
const output2 = typeAssertion("2 KG") as string //! amra ekhne as a diye assertion type fined krci.
console.log({output});
console.log({output2});

//? amra ekhane caile amder issa moto type fined krte pabo . and amra caile fixed type diye dite pabo.

type customError = {
    message: string
}

try {
    
} catch (error) {

    console.log((error as customError).message ); //! amra ekhne as a diye assertion type fined krci.
}