"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//       <article class="country">
//               <img class="country__img" src="${data.flags.png}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 100000
//                 ).toFixed(1)} people</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//               </div>
//             </article>
//       `;
//     countriesContainer.insertAdjacentHTML("afterbegin", html);
//     countriesContainer.style.opacity = "1";
//   });
// };

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 100000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("afterbegin", html);
  countriesContainer.style.opacity = "1";
};
// const getNeighbourData = function (country) {
//   //Ajax call country
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render Country
//     renderCountry(data);
//     //get Neighbour Country
//     //Ajax call country 2
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getCountryData("portugal");
// getCountryData("usa");
// getNeighbourData("portugal");
// getNeighbourData("usa");
// getNeighbourData("germany");
// getNeighbourData("ukraine");

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v2/name/${country}`);
//   request
//     .then((result) => result.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbore = data[0].borders?.[0];
//       if (!neighbore) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbore}`);
//     })
//     .then((result2) => result2.json())
//     .then((data2) => renderCountry(data2, "neighbour"));
// };
// getCountryData("portugal");

// const lotteryDraw = new Promise(function (resolve, reject) {
//   console.log("Start Lottery drow");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) resolve("You WIN!");
//     else reject(new Error("You loss your money"));
//   }, 2000);
// });
// lotteryDraw.then((res) => console.log(res)).catch((err) => console.error(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//   console.log(res);
//   const [data] = await res.json();
//   console.log(data);
// };
// whereAmI("ukraine");
// console.log("FIRST");
const getJSON = function (url, errorMessage = "Something wrong") {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errorMessage} (${res.status})`);
    return res.json();
  });
};

// const get3Countries = async function (c1, c2, c3) {
// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
// console.log([data1.capital, data2.capital, data3.capital]);
//   const data = await Promise.all([
//     getJSON(`https://restcountries.com/v2/name/${c1}`),
//     getJSON(`https://restcountries.com/v2/name/${c2}`),
//     getJSON(`https://restcountries.com/v2/name/${c3}`),
//   ]);
//   const res = data.map((d) => d[0].capital);
//   console.log(res);
// };

// get3Countries("portugal", "usa", "ukraine");

Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Finished"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
