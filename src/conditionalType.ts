//todo conditional type means  je type condition er upor nirvor kore take conditional type bole.


type A = null;
type B = undefined;

type C = A extends null ? true : false; //! eta answer true asbe.

type D = A extends null ? true: B extends undefined ? true : false;


