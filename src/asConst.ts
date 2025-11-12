// todo as const assertion use

const UserDetails = {
  Admin : "Admin", 
  Editor: "Editor",
  User : "User"
} as const

const UserId = (user: keyof typeof UserDetails) => {
  if (user === UserDetails.Admin || user === UserDetails.Editor) {
    return true;
  } else return false;
};

const result = UserId(UserDetails.Admin);
console.log(result);


const nameList = {
    name1: " Labib" ,
    name2: "Farash",
    name3: "Atik"
}


const uperCase = [
    nameList.name1.toUpperCase(),
    nameList.name2.toUpperCase(),
    nameList.name3.toUpperCase(),
]
console.log(uperCase);

const nameFunc = (value: (typeof uperCase)[keyof typeof uperCase])=>{
    if (value === nameList.name1 || value === nameList.name2) {
        return true
    } else return false
}
const result2 = nameFunc(nameList.name3)
console.log(result2)

//! eta enum er theke valo karon ekhne emon er moto js ke boro function banay nah ekhne oi function ta coto kore dey. 

