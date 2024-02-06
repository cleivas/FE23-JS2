import Account from "./modules/Account.js";

const account = new Account('spara', 3000);
account.showBalance();

account.deposit(10000);
account.showBalance();
account.withdraw(1000);
account.showBalance();