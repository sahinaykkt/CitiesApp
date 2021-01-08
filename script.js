import data from "./data.js"
import {
  createTableElements
} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity")
});

/* START CODING HERE */

// Cities which are population bigger than 500.000.
const biggerButton = document.querySelector("#populationBigger");
biggerButton.addEventListener("click", () => {
  const bigger500 = data.filter(cities => cities.population > 500000);
  createTableElements(bigger500, "allcities");
});

// Cities which are land area less than 1000.
const lessButton = document.querySelector("#landAreaLess");
lessButton.addEventListener("click", () => {
  const less1000 = data.filter(cities => cities.landArea < 1000);
  createTableElements(less1000, "allcities");
});

// Does any city has population less than 100.000?
const alertLess100 = document.querySelector("#isPopulationLess");
alertLess100.addEventListener("click", () => {
  const less100 = data.some(cities => cities.population < 100000);
  if (less100) {
    new Toast("Yes");
  } else {
    new Toast("No");
  };
});

// Does every city has land area bigger than 100?
const alertBigger100 = document.querySelector("#isLandBigger");
alertBigger100.addEventListener("click", () => {
  const bigger100 = data.every(cities => cities.landArea > 100);
  if (bigger100) {
    new Toast("Yes");
  } else {
    new Toast("No");
  };
});

// Select City
const cities = data.map(cityName => cityName.name);
const choosing = document.querySelector("#custom-select");
cities.forEach(element => {
  const option = document.createElement("option");
  option.setAttribute("value", element);
  option.textContent = element;
  choosing.appendChild(option);
});

choosing.addEventListener("change", (e) => {
  const selectCities = data.filter(cities => e.target.value === cities.name);
  createTableElements(selectCities, "singlecity");
});