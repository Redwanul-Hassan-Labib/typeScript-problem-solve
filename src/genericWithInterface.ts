//todo generic with interface

interface poorDeveloper<T>{
    name: string;
    age: number;
    device: {
        name: string;
        model: string;
        year: number;
    }

    samrtWatch : T
}

type samrtWatchitem ={
    name: string;
    model:string;
    quantity: number
}

const developerPoor:poorDeveloper<samrtWatchitem> = {
    name: "mr-x",
    age: 25,
    device : {
        name:"Serfece",
        model: "i7 10th gen",
        year: 2022,
    },
    samrtWatch:{
        name: "Keslet",
        model: "k500",
        quantity: 5
    }


}


console.log(developerPoor);



interface poorDeveloper2<T , X = null>{
    name: string;
    age: number;
    device: {
        name: string;
        model: string;
        year: number;
    }

    samrtWatch ?: T;
    bike ?: X;
}

type samrtWatchitem2 ={
    name: string;
    model:string;
    quantity: number
}

const developerPoor2:poorDeveloper2<samrtWatchitem2 > = {
    name: "mr-x",
    age: 25,
    device : {
        name:"Serfece",
        model: "i7 10th gen",
        year: 2022,
    },
    samrtWatch:{
        name: "Keslet",
        model: "k500",
        quantity: 5
    },

    bike: null


}