function createAccount(name, amount){
    return{name, amount};
}

function showBalance({name, amount}){
    console.log('The balance of', name, 'is', amount, 'sek')
}

function deposit(amount, account){
    const accountClone = {...account};
    accountClone.amount+=amount;
    return accountClone;
}

// withdraw 
function withdraw(amount, account){
    const accountClone = {...account};
    accountClone.amount-=amount;
    return accountClone;
}

let account1 = createAccount('savings', 25);
let account2 = createAccount('Jens', 40000);

console.log(account1);
showBalance(account1)

account1 = deposit(10000, account1);
showBalance(account1)

showBalance(account2)
account2 = deposit(10000, account2);
showBalance(account2)