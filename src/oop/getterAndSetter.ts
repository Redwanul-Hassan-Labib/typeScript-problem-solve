//todo get and set niye kaj krbo ekhn amra 

class TeacharAcoount {
   readonly userId : number;
    readonly name: string;
   private userBalance: number
    constructor(userId: number, name: string, userBalance: number) {
        this.userId = userId;
        this.name = name;
        this.userBalance = userBalance;

    }
    // currentBalance(balance : number){
    //     this.userBalance = this.userBalance + balance;
    // }

    set addBalance(balance : number){
        this.userBalance = this.userBalance + balance; //! set krle kkhno return krte hoy nah.
    }

    get getBalance(){
        return this.userBalance //! get krle return krte hoy karon amra eta console a dekhteci output ta
    }

}

const TeacharAcoount1 = new TeacharAcoount(111, "Redwan Labib" , 50)

// TeacharAcoount1.currentBalance(50)
// TeacharAcoount1.currentBalance(5000)

TeacharAcoount1.addBalance =  500
console.log(TeacharAcoount1.getBalance)