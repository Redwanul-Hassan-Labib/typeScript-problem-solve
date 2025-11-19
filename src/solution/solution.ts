

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





const getLength = (input: string | number[]) => {
  if (typeof input === "string") {
    return input.trim().length;
  }

  if (Array.isArray(input)) {
    return input.length;
  }
};





class person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'name: ${this.name}, age: ${this.age}'`;
  }
}






type BookTypes = {
  title: string;
  rating: number;
};


const filterByRating = (bookItems: BookTypes[]): BookTypes[] => {
  return bookItems.filter((item) => item.rating >= 4);
};



type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};



const filterActiveUsers = (user: Users[]): Users[] => {
  return user.filter((isUser) => isUser.isActive === true);
};



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


const printBookDetails = (bookItems: Book) => {
  const isAvailableItems = bookItems.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${bookItems.title}, Author: ${bookItems.author}, Published: ${bookItems.publishedYear}, Available: ${isAvailableItems}`
  );
};

printBookDetails(myBook);
printBookDetails(myBook2);





type ValueType = string | number;

const getUniqueValues = (arr1: ValueType[], arr2: ValueType[]): ValueType[] => {
  const result: ValueType[] = [];

  const exists = (value: ValueType): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) return true;
    }
    return false;
  };

  
  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i] as ValueType; 
    if (!exists(value)) {
      result[result.length] = value;
    }
  }

  
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i] as ValueType;
    if (!exists(value)) {
      result[result.length] = value;
    }
  }

  return result;
};






type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};



const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;
    const discountedPrice = product.discount
      ? basePrice - (basePrice * product.discount) / 100
      : basePrice;

    return total + discountedPrice;
  }, 0);
};






