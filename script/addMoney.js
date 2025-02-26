// document.getElementById("add-money")
//     .addEventListener("click", function (event) {
//         event.preventDefault();
//         const amount = document.getElementById("amount").value;
//         const convertedAmount = parseFloat(amount);
//         const pin = document.getElementById("pin").value;
//         const convertedPin = parseInt(pin);
//         const mainBalance = document.getElementById("main-balance").innerText;
//         const convertedMainBalance = parseFloat(mainBalance);

//         if (convertedPin === 1234) {
//             const sum= convertedMainBalance +  convertedAmount;
//             document.getElementById("main-balance").innerText = sum;
//         } else {
//             alert("Invalid Pin churikorte ascho");
//         }
//     })

document.getElementById("add-money")
.addEventListener("click", function (event){
    event.preventDefault();
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-balance");
    const selectedBank = document.getElementById("bank").value;


   if(amount<0){
    alert("- amount dea jabe na");
    return;
   }
 

    if(accountNumber.length === 11){
     if(pin === 1234){
        const sum = amount + mainBalance;
      //  document.getElementById("main-balance").innerText= sum;
        setInnerTextByIdAndValue("main-balance",sum);
        
        const container= document.getElementById("transaction-section");

        const div = document.createElement("div");
        div.classList.add("bg-blue-500");
        div.classList.add("p-4","mt-2");
    
        div.innerHTML = `
        <h1 class="text-yellow-300">Added Money From ${selectedBank}</h1>
        <h3>${amount}</h3>
        <p>Account Number: ${accountNumber}</p>
        `
        container.appendChild(div);

        // const p = document.createElement("p");
        // p.innerText=`
        // added ${amount} from ${accountNumber} account from ${selectedBank}
        // `
        // container.appendChild(p);


     }else{
        alert("Invalid pin.Please check the pin try again.");
     }
    }else{
        alert("Invalid account number.Please check the number and try again.");
    }
})