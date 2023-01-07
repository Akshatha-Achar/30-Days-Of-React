const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1. Declare an empty array;
const arr = [];

// 2.Declare an array with more than 5 number of elements
const fruits = ["banana", "apple", "grapes", "lime", "pineapple", "strawberry"];

// 3.Find the length of your array
console.log(fruits.length);

// 4. Get the first item, the middle item and the last item of the array
const last = fruits.length - 1;
const mid = Math.trunc(fruits.length / 2);
console.log(fruits[0], fruits[mid], fruits[last]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1,
  true,
  "banana",
  5.33,
  "r",
  { user: "Sarra" },
  ["tomato", "onion"],
];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(`Number of companies are ${itCompanies.length}`);
// Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[Math.trunc(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);
// Print out each company
// for (let i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies[i]);
// }
// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
const company = itCompanies.slice(0, -1);
console.log(
  `${company.join(", ")} and ${itCompanies.at(-1)} are big IT companies.`
);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function isCompanyExist(company_name) {
  if (itCompanies.includes(company_name)) {
    return company_name;
  } else {
    return "company is not found";
  }
}
console.log(isCompanyExist("Facebook"));
console.log(isCompanyExist("Meta"));

// Filter out companies which have more than one 'o' without the filter method
console.log(`Companies which have more than one 'o':`);
for (let i = 0; i < itCompanies.length; i++) {
  const chars = itCompanies[i].split("");
  if (chars.filter((ch) => ch === "o").length > 1) {
    console.log(itCompanies[i]);
  }
}
// Sort the array using sort() method
itCompanies.sort();
console.log("Array after sorting :", itCompanies);

// Reverse the array using reverse() method
itCompanies.reverse();
console.log("Array after reversing: ", itCompanies);

// Slice out the first 3 companies from the array
console.log("Slicing first 3 companies:", itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log("Slicing last 3 companies:", itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
console.log(
  "Slicing out the middle from the array",
  itCompanies.slice(Math.trunc(itCompanies.length / 2))
);

// Remove the first IT company from the array
itCompanies.shift();
console.log("After removing first it company", itCompanies);

// Remove the middle IT company or companies from the array
console.log(itCompanies.length);
itCompanies.splice(Math.trunc((itCompanies.length - 1) / 2), 1);
console.log("After removing middle it company", itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log("After removing last it company", itCompanies);

// Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log("After removing all it companies", itCompanies);
