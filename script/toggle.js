// default 
//     document.getElementById("add-money-section").style.display = "block";
//     document.getElementById("cashout-section").style.display = "none";


// document.getElementById("add-money-tittle")
// .addEventListener("click",function(){
//     document.getElementById("add-money-section").style.display = "block";
//     document.getElementById("cashout-section").style.display = "none";
// })

// document.getElementById("cash-out")
// .addEventListener("click",function(){
//     document.getElementById("add-money-section").style.display = "none";
//     document.getElementById("cashout-section").style.display = "block";
// })

document.getElementById("cashout-section").style.display = "none";
document.getElementById("transaction-section").style.display = "none";


document.getElementById("add-money-tittle")
.addEventListener("click", function(){
    handleToggle("add-money-section","block");
    handleToggle("cashout-section","none");
    handleToggle("transaction-section","none");  
})

document.getElementById("cash-out-tittle")
.addEventListener("click",function(){
    handleToggle("add-money-section","none");
    handleToggle("cashout-section","block");
    handleToggle("transaction-section","none"); 
})

document.getElementById("transection-tittle")
.addEventListener("click",function(){
    handleToggle("add-money-section","none");
    handleToggle("cashout-section","none");
    handleToggle("transaction-section","block");
})

