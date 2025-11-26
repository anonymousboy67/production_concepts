//Design Pattern

//function get exposed if we direclty return
let fnc=(function(){
    return 12;
})();

//function will show vaue as we have let and gives undefined
let fnc1=(function(){
    let bankBalance=12000;
})();


let Bank=(function(){
    let bankBalance=15000;

    function checkBalance(){
        console.log(bankBalance);
    }

    function setBalance(val){
        bankBalance=val;
    }

    function withdraw(val){
        if(val<=bankBalance){
            bankBalance=bankBalance-val;
            console.log(bankBalance);
        }
    }

    return{
        checkBalance,
        setBalance,
        withdraw,
    }
})();

