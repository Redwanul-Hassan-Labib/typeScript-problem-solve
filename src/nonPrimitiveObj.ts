//TODO reference type :  object type

const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Redwanul",
  middleName: "Hassan",
  lastName: "Labib",
};
const user2: {
  readonly institute: string; // access modifier
  firstName: string;
  middleName?: string; //optional
  lastName: string;
  isMarried: boolean;
} = {
  institute: "Programming Hero",
  firstName: "Redwan",
  lastName: "Labib",
  isMarried: false,
};

user.firstName = "redwan bhai";


