"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

let sort = false;
// Display discounts
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, idx) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${idx + 1} ${type} 
      </div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
//Print balance
// const calcPrintBalance = function (users) {
//   users.map((user) => {
//     user.balance = user.movements.reduce((acc, name) => acc + name, 0);
//     labelBalance.textContent = `${user.balance}€`;
//   });
// };
const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce((acc, name) => acc + name, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// Transform user name to login name
const userTransform = function (users) {
  users.map(
    (user) =>
      (user.username = user.owner
        .split(" ")
        .map((name) => name.toLowerCase().at(0))
        .join(""))
  );
};

//Calc Display Summary
const calcDisplaySummary = function (account) {
  const depositesSummary = account.movements
    .filter((deposit) => deposit > 0)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumIn.textContent = `${depositesSummary}€`;
  const withdrawal = Math.abs(
    account.movements
      .filter((withdrawal) => withdrawal <= 0)
      .reduce((acc, withdrawal) => acc + withdrawal, 0)
  );
  labelSumOut.textContent = `${withdrawal}€`;
  const interest = account.movements
    .filter((deposit) => deposit > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumInterest.textContent = `${interest}€`;
};
//Update UI

const updateUI = function (user) {
  //Display movements
  displayMovements(user.movements);
  //Display balance
  calcPrintBalance(user);
  // Display summary
  calcDisplaySummary(user);
};

// Hide UA
const hideUI = function () {
  inputCloseUsername.value = inputClosePin.value = "";
  labelWelcome.textContent = "Log in to get started";
  containerApp.style.opacity = 0;
};

//Event handler LOGIN
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (account) =>
      account?.username === inputLoginUsername.value &&
      account?.pin === Number(inputLoginPin.value)
  );
  inputLoginUsername.value = "";
  inputLoginPin.value = "";
  //Display UI and message
  labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
  containerApp.style.opacity = 1;
  //Update UI
  updateUI(currentAccount);
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("TRANSFER");
  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  const recieverAccount = accounts.find(
    (account) => inputTransferTo.value === account?.username
  );
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAccount !== currentAccount
  ) {
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
});

// Loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    currentAccount.movements.some(
      (mov) => mov > 0 && mov >= loanAmount * 0.1 && loanAmount > 0
    )
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// Close acccount
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const deletedAccountIndex = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(deletedAccountIndex);
    accounts.splice(deletedAccountIndex, 1);
    hideUI();
  }
});

// Sort

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  // sort = !sort;
  console.log(sort);
  displayMovements(currentAccount.movements, (sort = !sort));
});

userTransform(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
