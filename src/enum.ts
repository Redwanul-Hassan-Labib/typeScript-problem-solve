// todo using enum === set of fixed string leteral means ek jaygai niye rakha .

type DeshBoard = "Admin" | "Editor"| "User";

// enum UserDetails  {
//     Admin = " Admin",
//     Editor = "Editor",
//     User = "User"
// }

const UserId2 = (user :DeshBoard)=>{
    if(user==="Admin" || user==="Editor"){
        return true
    }else return false
}

const result2 = UserId2("Admin");

console.log(result2);

//! enum type use kora besi valo nah ei type ta developer ta use korte nah krce .

enum UserDetails {
  Admin = "Admin", 
  Editor = "Editor",
  User = "User"
}

const UserId = (user: UserDetails) => {
  if (user === UserDetails.Admin || user === UserDetails.Editor) {
    return true;
  } else return false;
};

const result = UserId(UserDetails.Admin);
console.log(result);