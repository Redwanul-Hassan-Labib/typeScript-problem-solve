/* ==============================================*/
//!               Problem -1
/* ==============================================*/

const formatValue = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    if (input === false) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log(formatValue("redwan"))
// console.log(formatValue(5))
// console.log(formatValue(true))

/* ==============================================*/
//!               Problem -1 end
/* ==============================================*/

/* ==============================================*/
//?               Problem -2
/* ==============================================*/

const getLength = (input: string | number[]) => {
  if (typeof input === "string") {
    return input.trim().length;
  }

  if (Array.isArray(input)) {
    return input.length;
  }
};

// console.log(getLength("redwan"))
// console.log(getLength([12,25,20]))

/* ==============================================*/
//?               Problem -2    End
/* ==============================================*/

/* ==============================================*/
//!               Problem -3
/* ==============================================*/

class person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
const person1 = new person("Redwan Labib", 23);
const person2 = new person("Labib", 23);

// console.log(person1.getDetails())
// console.log(person2.getDetails())

/* ==============================================*/
//!               Problem -3   End
/* ==============================================*/

/* ==============================================*/
//!               Problem -4
/* ==============================================*/

type BookTypes = {
  title: string;
  rating: number;
};
const books: BookTypes[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterByRating = (bookItems: BookTypes[]): BookTypes[] => {
  return bookItems.filter((item) => item.rating >= 4);
};

// console.log(filterByRating(books));

/* ==============================================*/
//!               Problem -4   End
/* ==============================================*/

/* ==============================================*/
//!               Problem -5
/* ==============================================*/

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const users: Users[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

const filterActiveUsers = (user: Users[]): Users[] => {
  return user.filter((isUser) => isUser.isActive === true);
};

// console.log(filterActiveUsers(users));

/* ==============================================*/
//!               Problem -5  End
/* ==============================================*/



/* ==============================================*/
//!               Problem -6
/* ==============================================*/

interface Book {
  title:string;
  author:string;
  publishedYear:number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
const myBook2: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};


const printBookDetails = (bookItems :Book)=>{
    const isAvailableItems = bookItems.isAvailable ? "Yes" : "No";
    console.log(`Title: ${bookItems.title}, Author: ${bookItems.author}, Published: ${bookItems.publishedYear}, Available: ${isAvailableItems}`);
} 

printBookDetails(myBook)
printBookDetails(myBook2)
