// // Exercise: Level 2
// // Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file.

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries);
console.log(webTechs);

//   // First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.replace(/[^\w\s\']|_/g, "").split(" ");
console.log(words);
console.log(words.length);

//   In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//   Add 'Meat' in the beginning of your shopping cart if it has not been already added
function addProduct(product) {
  if (!shoppingCart.includes(product)) {
    shoppingCart.push(product);
  }
  return shoppingCart;
}
console.log(addProduct("Meat"));

//   add Sugar at the end of you shopping cart if it has not been already added
console.log(addProduct("Sugar"));

//   remove 'Honey' if you are allergic to honey
function allergicTo(product, yesOrNo) {
  if (shoppingCart.includes(product) && yesOrNo === "yes") {
    const index = shoppingCart.indexOf(product);
    shoppingCart.splice(index, 1);

    return shoppingCart;
  }
}

console.log(allergicTo("Honey", "yes"));

//   modify Tea to 'Green Tea'
function modify(productFrom, productTo) {
  const i = shoppingCart.indexOf(productFrom);

  if (i >= 0) {
    shoppingCart[i] = productTo;
  }
  return shoppingCart;
}
console.log(modify("Tea", "Green Tea"));

//   In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries);

if (countries.includes("Ethiopia")) {
  console.log("Ethiopia".toUpperCase());
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

//   In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs);
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}
//   Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
//   ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

//   Exercise: Level 3
//   The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const min = ages[0];
const max = ages[ages.length - 1];
console.log("Minimum age :", min);
console.log("Maximum age: ", max);

function findMedian(ages) {
  let mid, median;
  if (ages.length % 2 === 0) {
    mid = Math.trunc(ages.length / 2);
    const midArr = ages.slice(mid, mid + 2);
    console.log(midArr);
    const sum = midArr.reduce((acc, ele) => acc + ele, 0);
    median = sum / 2;
  } else {
    mid = Math.trunc(ages.length / 2);
    median = ages[mid];
  }
  return median;
}
console.log("Median age:", findMedian(ages));

function findAverage(ages) {
  const sum = ages.reduce((acc, ele) => acc + ele, 0);
  const average = sum / ages.length;
  return average;
}
console.log("Average age:", findAverage(ages));

function findRange(ages) {
  const min = ages[0];
  const max = ages[ages.length - 1];
  return max - min;
}
console.log("Range of ages:", findRange(ages));

function compareValue(ages) {
  const min = ages[0];
  const max = ages[ages.length - 1];
  const average = findAverage(ages);

  return `(min - average): ${Math.abs(min - average).toFixed(
    3
  )} \n (max - average): ${Math.abs(max - average).toFixed(3)}`;
}
console.log("Compare value: \n", compareValue(ages));

//   1.Slice the first ten countries from the countries array
const countriesAll = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
console.log("Length of countriesAll", countriesAll.length);

console.log("Slicing first 10 countries:", countriesAll.slice(0, 10));

//   Find the middle country(ies) in the countries array

const midIndex = Math.trunc(countriesAll.length / 2);
console.log("middle country is", countriesAll[midIndex]);

//   Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

function divideEqualy(countriesAll) {
  const mid = Math.trunc(countriesAll.length / 2);
  let firstHalf, secondHalf;
  if (countriesAll.length % 2 === 0) {
    firstHalf = countriesAll.slice(0, mid);
    secondHalf = countriesAll.slice(mid);
  } else {
    firstHalf = countriesAll.slice(0, mid + 1);
    secondHalf = countriesAll.slice(mid + 1);
  }
  return `first : ${firstHalf.length} \n second: ${secondHalf.length}`;
}

console.log(divideEqualy(countriesAll));
