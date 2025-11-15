//todo ekhne amara ki vabe ekta item ke modifier diye access krte pari eta dekhbo.

class TeacharAcoount {
   readonly userId : number;
    readonly name: string;
   private userBalance: number
    constructor(userId: number, name: string, userBalance: number) {
        this.userId = userId;
        this.name = name;
        this.userBalance = userBalance;

    }
    currentBalance(balance : number){
        this.userBalance = this.userBalance + balance;
    }
}

const TeacharAcoount1 = new TeacharAcoount(111, "Redwan Labib" , 50)

TeacharAcoount1.currentBalance(50)
TeacharAcoount1.currentBalance(5000)
console.log(TeacharAcoount1)