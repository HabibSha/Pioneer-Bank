 // login button event handler
 const submit = document.querySelector("#btn");
 submit.addEventListener("click", function(){
     const fillUp = document.querySelector(".submit-area");
     fillUp.style.display = "none";
     const transactionArea = document.querySelector(".transaction-area");
     transactionArea.style.display = "block";
 })

 // deposit amount event handler
 const depositButton = document.querySelector("#depositButton");
 depositButton.addEventListener("click", function(){
     const depositAmount = document.querySelector("#depositAmount").value;
     const depositNumber = parseFloat(depositAmount);
     
     const currentAmount = document.querySelector("#currentAmount").innerText;
     const currentNumber = parseFloat(currentAmount);
     const totalNumber = depositNumber + currentNumber;
     document.querySelector("#currentAmount").innerText = totalNumber;

     const currentBalance = document.querySelector("#currentBalance").innerText;
     const currentBalanceNumber = parseFloat(currentBalance);
     const totalBalance = depositNumber + currentBalanceNumber;
     document.querySelector("#currentBalance").innerText = totalBalance;
     
     document.querySelector("#depositAmount").value = "";
 })


 // withdraw amount event handler
 const withdrawButton = document.querySelector("#withdrawButton");
 withdrawButton.addEventListener("click", function(){
     const withdrawAmount = document.querySelector("#withdrawAmount").value;
     const withdrawNumber = parseFloat(withdrawAmount);
     
     const currentWithdraw = document.querySelector("#currentWithdraw").innerText;
     const withdrawNum = parseFloat(currentWithdraw);
     const totalWithdraw = withdrawNumber + withdrawNum;
     document.querySelector("#currentWithdraw").innerText = totalWithdraw;

     const currentBalance = document.querySelector("#currentBalance").innerText;
     const currentBalanceNumber = parseFloat(currentBalance);
     const totalBalance = currentBalanceNumber - withdrawNumber;
     document.querySelector("#currentBalance").innerText = totalBalance;
     
     document.querySelector("#withdrawAmount").value = "";
 })






 // Using function
 // deposit button event handler
 /****const deposit_btn = document.querySelector("#dbutton");
 deposit_btn.addEventListener("click", function(){
     const deposit_Amount = document.querySelector("#depositAmount").value;
     const deposit_Number = parseFloat(deposit_Amount);

     updateSpanTag("#currentDeposit", deposit_Number);
     updateSpanTag("#currentBalance", deposit_Number);

     document.querySelector("#depositAmount").value = "";
 })
 
 function updateSpanTag(id, deposit_Number){
     const current = document.querySelector(id).textContent;
     const current_Number = parseFloat(current);
     const total_Amount = deposit_Number + current_Number;
     document.querySelector(id).innerText = total_Amount;
 }*****/