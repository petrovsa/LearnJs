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

const getCountryData = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`);
  request
    .then((result) => result.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbore = data[0].borders?.[0];
      if (!neighbore) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbore}`);
    })
    .then((result2) => result2.json())
    .then((data2) => renderCountry(data2, "neighbour"));
};
getCountryData("portugal");
