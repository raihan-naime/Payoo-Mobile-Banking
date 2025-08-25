const addMoneyBankAccount = 2222;
const pinNumber = 1111;

const transactionData = [];

// common functions 🩸🩸🩸🩸

// input values
function getInputValueNumber(id) {
  const valueNumber = parseInt(document.getElementById(id).value);
  return valueNumber;
}
// inner text
function getInnerText(id) {
  const innerText = parseInt(document.getElementById(id).innerText);
  return innerText;
}
// set money
function setInnerText(id, currentBalance) {
  document.getElementById(id).innerText = currentBalance;
}

// toggle form function
function features(id) {
  const allFeatures = document.getElementsByClassName("features-btns");
  for (const feature of allFeatures) {
    feature.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// toggle hover
function cartHover(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#f3f8fe]");
    btn.classList.add("border-[#e9e9e9]");
  }
  // remove
  document.getElementById(id).classList.remove("border-[#e9e9e9]");
  // set
  document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#f3f8fe]");
}
cartHover("add-money-section-btn");

// add money feature 🩸🩸🩸🩸
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addAmount = getInputValueNumber("add-amount");
    const availableBalance = getInnerText("available-balance");
    // bank number and pin
    const bankAccountNumber = getInputValueNumber("bank-account-number");
    const bankPinNumber = getInputValueNumber("bank-pin-number");
    if (
      bankAccountNumber === addMoneyBankAccount &&
      bankPinNumber === pinNumber
    ) {
      // add money
      const currentBalance = availableBalance + addAmount;
      setInnerText("available-balance", currentBalance);
    }

    const data = {
      name: "Add MOney",
      date: new Date().toLocaleDateString(),
    };
    transactionData.push(data);
    console.log(data);
  });

// cash out feature 🩸🩸🩸🩸
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const cashOutAmount = getInputValueNumber("cash-out-amount");
  const availableBalance = getInnerText("available-balance");
  const cashOutPinNumber = getInputValueNumber("cash-out-pin-number");

  if (pinNumber == cashOutPinNumber) {
    const currentBalance = availableBalance - cashOutAmount;

    // set current amount
    setInnerText("available-balance", currentBalance);
  } else {
    alert("pore asen bhai ekhun dokan bondho");
  }

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleDateString()
  };
  transactionData.push(data);
});

// Transactions feature 
document
  .getElementById("transaction-section-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';

    for(const data of transactionData){
      const div = document.createElement('div');
      div.innerHTML = `
      <div
          class="flex justify-between items-center bg-white py-3 px-4 mb-3 rounded-xl"
        >
          <!-- left -->
          <div class="flex gap-2 items-center">
            <div
              class="h-[45px] w-[45px] flex justify-center items-center rounded-full bg-[#f2f2f2]"
            >
              <img class="" src="./assets/wallet1.png" alt="" />
            </div>
            <div>
              <h1 class="text-[#525252] font-semibold">${data.name}</h1>
              <p class="text-[#416584] text-sm">${data.data}</p>
            </div>
          </div>

          <!-- right -->
          <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `
      transactionContainer.appendChild(div);
    }
  });

// toggle feature 🩸🩸🩸🩸

// add money button
document
  .getElementById("add-money-section-btn")
  .addEventListener("click", function () {
    features("add-money-section");
    cartHover("add-money-section-btn");
  });
// cash out button
document
  .getElementById("cash-out-section-btn")
  .addEventListener("click", function () {
    features("cash-out-section");
    cartHover("cash-out-section-btn");
  });
// Transfer money button
document
  .getElementById("transfer-money-section-btn")
  .addEventListener("click", function () {
    features("transfer-money-section");
    cartHover("transfer-money-section-btn");
  });
// get bonus button
document
  .getElementById("get-bonus-section-btn")
  .addEventListener("click", function () {
    cartHover("get-bonus-section-btn");
  });
// pay bill button
document
  .getElementById("pay-bill-section-btn")
  .addEventListener("click", function () {
    features("pay-bill-section");
    cartHover("pay-bill-section-btn");
  });
// transactions button
document
  .getElementById("transaction-section-btn")
  .addEventListener("click", function () {
    features("transaction-section");
    cartHover("transaction-section-btn");
  });
