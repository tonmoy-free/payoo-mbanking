// alert('helklo world');

document.getElementById("login-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);
        
        if (accountNumber.length === 11) {
            if (convertedPin === 1234) {
                console.log("ok");
            } else {
                console.log("Invalid pin")
            }
        } else {
            console.log("Invalid account number")
        }
    })