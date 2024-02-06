import Account from "./modules/Account.js";

const account = new Account('spara', 3000);
account.showBalance();


 account.deposit( 6000 );
 account.deposit( 2000 );
 account.deposit( 3000 );
 account.showBalance();

 account.withdraw(9000);
 account.withdraw(8000);
 account.showBalance();

//  account.amount = -10000;

//  account.test = 10;
 console.log(account)