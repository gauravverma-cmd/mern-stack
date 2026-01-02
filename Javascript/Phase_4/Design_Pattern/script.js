// module pattern => TO write our code in a systematic pattern . Model pattern me hum jo bhi baynge vo sb hme iife k andr likhna pdta hai aur iffe k ander vo sb private ho jata hai aur fir hme iife k ander se bs ek object return krna padta hai taki hum iife k ander wala code chla ske.......  
// 1 -> IIFE { immedaitly envoked function execuation , iske ander hum jo bhi code likhte hai vo sb private ho jata hai aru hum use bhar access nahi kr skte}

let bank = (function (){
    let bankBalance = 12000;
    // is code me hum bankBalance ko diractly acces nahi kr skte hai. 
    function checkBalance(val){
        console.log(bankBalance)
    }

    function setBalance(val){
        bankBalance += val;
    }
    function withdraw(val){
        if(val<=bankBalance){
            bankBalance -= val;
            console.log(bankBalance)
        }
    }

    return {
        checkBalance,
        setBalance,
        withdraw,
    };
})();

                     //  Revealing module pattern  

// { isme bs return k ander object me function k name put kr dete hai 

//    retrun {
//     check : checkBalance,
//     set : setBalance,
//     draw : withdraw,
//    }

//     And hum inhi name se call kr dete hai 
//     bank.check()
//     bank.set()
// }


console.log(bank);

bank.checkBalance();
bank.withdraw(4000)
bank.setBalance(10000); // it used to add the amount in existing balance
bank.checkBalance()
