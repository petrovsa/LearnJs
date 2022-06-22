"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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
// Logout Timer
const logoutTimer = function () {
  let time = 30;
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      hideUI();
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//format Date
const formatDate = function (date, locale) {
  const calcPeriodDate = (date2, date1) =>
    Math.abs(Math.round((date2 - date1) / (1000 * 60 * 60 * 24)));
  const periodDate = calcPeriodDate(new Date(), date);

  if (periodDate === 0) return "Today";
  if (periodDate === 1) return "Yestarday";
  if (periodDate <= 7) return `${periodDate} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};
//formatCurrency
const formatCurrency = (value, locale, currency) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

let sort = false;
// Display discounts
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, idx) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[idx]);
    const displayData = formatDate(date, acc.locale);
    const formatMov = formatCurrency(mov, acc.locale, acc.currency);
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${idx + 1} ${type} 
      </div>
      <div class="movements__date">${displayData}</div>
      <div class="movements__value">${formatMov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce((acc, name) => acc + name, 0);
  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
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
  labelSumIn.textContent = formatCurrency(
    depositesSummary,
    account.locale,
    account.currency
  );
  const withdrawal = Math.abs(
    account.movements
      .filter((withdrawal) => withdrawal <= 0)
      .reduce((acc, withdrawal) => acc + withdrawal, 0)
  );
  labelSumOut.textContent = formatCurrency(
    withdrawal,
    account.locale,
    account.currency
  );
  const interest = account.movements
    .filter((deposit) => deposit > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, deposit) => acc + deposit, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
};
//Update UI

const updateUI = function (user) {
  //Display movements
  displayMovements(user);
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
let currentAccount, timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (account) =>
      account?.username === inputLoginUsername.value &&
      account?.pin === +inputLoginPin.value
  );
  inputLoginUsername.value = "";
  inputLoginPin.value = "";
  //Display UI and message
  labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
  containerApp.style.opacity = 1;
  if (timer) clearInterval(timer);
  timer = logoutTimer();
  //Update UI
  updateUI(currentAccount);
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
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
    //Add TransferDate
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAccount.movementsDates.push(new Date().toISOString());
    //Update UI
    updateUI(currentAccount);
    //Reset timer
    clearInterval(timer);
    timer = logoutTimer();
  }
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
});

// Loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    currentAccount.movements.some(
      (mov) => mov > 0 && mov >= loanAmount * 0.1 && loanAmount > 0
    )
  ) {
    setTimeout(function () {
      currentAccount.movements.push(loanAmount);
      // add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      //Reset timer
      clearInterval(timer);
      timer = logoutTimer();
    }, 3000);
  }
  inputLoanAmount.value = "";
});

// Close acccount
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
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
  displayMovements(currentAccount, (sort = !sort));
});

// labelDate.textContent = new Data();
// updateUI(currentAccount);
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const year = now.getFullYear();
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const hour = `${now.getHours()}`.padStart(2, 0);
// const minutes = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
};
labelDate.textContent = new Intl.DateTimeFormat("en-GB", options).format(now);
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
