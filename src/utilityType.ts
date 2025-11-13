//todo utility type use.


type User = {
    id: number;
    name: string;
    school: string;
    color: string;
    age: number;
    class: number;
}

type PickUser = Pick<User, "id" | "name" | "color" >  //! using pick type. this items is use available.

type OmitUser = Omit<User, "age"|"class" |"school" > //! using omit  type . this items is not use available .

type ReadonlyUser = Readonly<User> //! using Readonly type. eta use krle new data assign krte pabo nah.

type PartialUser = Partial<User> //! using Pertial type. eta use krle sob data optional hoye jabe.

type RequiredUser = Required<User> //!using Required type. eta use krle sob gula required hoye jabe.

type RecordUser = Record<string, unknown> //! using Record type. eta use kri faka object bah array neyar jonno.


//?  egula janle hbe kintu aro onk utility type ace.

