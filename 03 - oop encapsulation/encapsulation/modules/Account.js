export default class Account{
    #name;
    #amount;

    constructor(name, amount){
        this.#name = name;
        this.#amount = amount;
        this.#privatMetod();
        Object.seal(this);
    }
    
    showBalance(){
        console.log(`Balance in ${this.#name} is ${this.#amount}`);
    }
    deposit(money){
        if(money<=5000) this.#amount+=money;
        else{
            console.log('Du kan inte sätta in mer än 5000 åt gången');
        }
    }
    withdraw(money){
        if(this.#amount<money) console.log('Det finns inte tillräckligt på kontot');
        else if(money<=10000) this.#amount-=money;
        else console.log('du kan inte ta ut mer än 10000 åt gången')
    }
    getName(){
        return this.#name;
    }
    setName(newName){
        if(typeof newName === 'string'){
            this.#name = newName;
            return 'New name set'
        }
        else{
            return 'New name needs to be a string'
        }
    }
    #privatMetod(){
        console.log('den här metoden är bara tillgänglig inifrån objektet')
    }
}