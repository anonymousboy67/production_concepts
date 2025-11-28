function createCounter(){
    let count=0;

    return{
        increment:()=>++count,
        decrement:()=>--count,
        getCount:()=>count
    }
}

const counter=createCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());



function secret(){
    let message="hello";

return function(){
    message=message+ "!";
    return message;
};
}

const talk=secret();
console.log(talk());
console.log(talk());
console.log(talk());


function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => {
      if (amount > 0) balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
      }
      return balance;
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));  
console.log(account.balance);   

