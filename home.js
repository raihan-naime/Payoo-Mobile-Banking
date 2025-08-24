const addMoneyBankAccount = 2222;
const pinNumber = 1111;

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addAmount = document.getElementById("add-amount").value;
    const addAmountNumber = Number(addAmount);

    const availableBalance =
      document.getElementById("available-balance").innerText;
    const availableBalanceNumber = Number(availableBalance);
    
    // bank number and pin
    const bankAccountNumber = parseInt(
      document.getElementById("bank-account-number").value
    );
    const bankPinNumber = parseInt(
      document.getElementById("bank-pin-number").value
    );
    // converted into number
    // const bankAccountNumberConverted = Number(bankAccountNumber);
    // const bankPinNumberConverted = Number(bankPinNumber);
    // console.log(bankAccountNumberConverted , bankPinNumberConverted);
    if (
      bankAccountNumber === addMoneyBankAccount &&
      bankPinNumber === pinNumber
    ) {
      // add money
      const currentBalance = availableBalanceNumber + addAmountNumber;
      document.getElementById("available-balance").innerText = currentBalance;
    }
  });

// cash out feature
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
    const availableBalance =
      document.getElementById("available-balance").innerText;
    const availableBalanceNumber = Number(availableBalance);
    const cashOutPinNumber = parseInt(document.getElementById('cash-out-pin-number').value);


    if(pinNumber == cashOutPinNumber){
      const currentBalance = availableBalanceNumber - cashOutAmount;
    console.log(currentBalance);
    // set current amount
    document.getElementById("available-balance").innerText = currentBalance;
    }
    else{
      alert('pore asen bhai ekhun dokan bondho');
    }
  });

// toggle feature
document
  .getElementById("add-money-section-btn")
  .addEventListener("click", function () {
    // document.getElementById('cash-out-section').classList.add('hidden');
    // document.getElementById('add-money-section').classList.remove('hidden');
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "block";
  });
document
  .getElementById("cash-out-section-btn")
  .addEventListener("click", function () {
    // document.getElementById('add-money-section').classList.add('hidden');
    // document.getElementById('cash-out-section').classList.remove('hidden');
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "block";
  });
