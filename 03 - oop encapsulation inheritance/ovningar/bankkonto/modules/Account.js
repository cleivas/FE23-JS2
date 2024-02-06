export default class Account{
    constructor(name, amount){
        this.name = name;
        this.amount = amount;
    }
    showBalance(){
        console.log(`Balance in ${this.name} is ${this.amount}`);
    }
    deposit(money){
        this.amount+=money;
    }
    withdraw(money){
        this.amount-=money;
    }
}