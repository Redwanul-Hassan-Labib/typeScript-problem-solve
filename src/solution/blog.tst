2. What is the use of the keyof keyword in TypeScript? Provide an example

==> keyof হলো ঃ-
কোনো object টাইপের সব property নামকে একটি ইউনিয়ন type হিসেবে রিটার্ন করে।

type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;


5. Provide an example of using union and intersection types in TypeScript.


==>Union Type ( | ):-

 Union টাইপ মানে হলো, একটি ভ্যারিয়েবল বা প্রপার্টি একাধিক টাইপের যে কোনোটাই হতে পারে।
এটা এমন, যেন আমাকে তিনটা অপশন দেওয়া হলো, আর আমি একটা বেছে নেবে। তাকে আমরা union type বলে।


যেমনঃ type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  console.log("Current:", status);
}

showStatus("success");  
showStatus("loading");

Intersection Type ( & ):-

==> Intersection টাইপ হলো দুটি (বা তার বেশি) টাইপকে merge করা।
এখন নতুন যে টাইপ তৈরি হলো, সেখানে সব টাইপের সব property থাকতে হবে।

যেমনঃ type User = {
  name: string;
  email: string;
};

type Admin = {
  role: "admin";
  permissions: string[];
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "labib",
  email: "redwan@example.com",
  role: "admin",
  permissions: ["read", "write"]
};










