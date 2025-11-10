//todo impalement  generic type

//const user = userid

type friendList<T> = Array<T>; //generic

const friend:friendList<string> = ["mr-x","mr-y", "mr-z" ]

const friendNum:friendList<number> = [2,5,4,]

const friendType:friendList<boolean> = [true, false, true]



type Coordinates = [number, number];
type Coordinates2<X,Y> = [X, Y];


const coordinates:Coordinates = [ 2, 3]

const coordinates2:Coordinates2<string, number> = ["Korim", 25]

//! array of object a  generic  use



//type friendList2<T> = Array<T>; //generic

type listItem<X> = X

const arr:listItem<{name: string; age: number}>[] = [
    {
        name: "mr-x",
        age: 25
    },
    {
        name: "mr-Y",
        age: 25
    }
]