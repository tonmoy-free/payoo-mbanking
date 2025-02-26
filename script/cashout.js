// document.getElementById("cashout-btn")
// .addEventListener("click",function(event){
// event.preventDefault();
// const pin = document.getElementById("cashout-pin").value;
// const convertedPin = parseInt(pin);
// const amount = document.getElementById("cashout-amount").value;
// const convertedAmount = parseFloat(amount);
// const mainBalance = document.getElementById("main-balance").innerText;
// const convertedMainBalance = parseFloat(mainBalance);

// if(convertedPin === 1234){
//     const sum = convertedMainBalance - convertedAmount;
//     document.getElementById("main-balance").innerText = sum;

// }else{
//     alert('Invalid Pin');
// }
// })

document.getElementById("cashout-btn")
.addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("cashout-account-number").value;
    const pin = getInputValueById("cashout-pin");
    const amount = getInputValueById("cashout-amount");
    const mainBalance = getInnerTextById("main-balance");

if(amount>mainBalance){
 alert("maefmadosf");
 return;
}


    
    if(accountNumber.length === 11){
     if(pin === 1234){
        const sum = mainBalance - amount;
        setInnerTextByIdAndValue("main-balance",sum);

        const container= document.getElementById("transaction-section");

        const p = document.createElement("p");
        p.innerText = `
        Cashout ${amount} from this ${accountNumber} account
        `
       container.appendChild(p);


     }else{
        alert("Invalid pin");
     }
    }else{
        alert("Invalid account number");
    }
})