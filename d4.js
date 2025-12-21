// Q1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
// 'You are old enough to drive' but if not 18 give another feedback starting to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
// let age=prompt('enter your age');
// if(age>=18){
//     console.log('you are old enough to drive ');
// }else{
//     console.log('starting to wait for the number of years he needs to turn 18.');
// }

// Q2Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// let myAge=30;
// let yourAge=prompt('enter your age');
// if(myAge>yourAge){
//     console.log(`your age is${myAge-yourAge}older than me`);
// }else if(myAge<yourAge){
//     //console.log(`your age is${yourAge-myAge}older than me`);
//     console.log('your age is',yourAge-myAge,'years older than me');
// }else{console.log('your and my age is same')

// }
//Q3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
// let a=4
// let b=3
// if(a>b){
//     console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} is less than ${b}`);
// }
//ternary operator
// let a=4
// let b=3
// a>b
// ?console.log(`${a} is greater than ${b}`)
// :console.log(`${a} is less than ${b}`);
// Q4Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
// let num=prompt('enter a number');
// if(num%2===0){//% use comes reminder 2 le divide garda zero aaune reminder vayo vane even ho
//     console.log(`${num}is even number`);
// }else{
//     console.log(`${num}is odd number`);
// }
//level 2
// Q1Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let marks=prompt('enter the marks');
// if (marks >= 90 && marks <= 100) {
//     console.log('A');
// } else if (marks >= 70 && marks <= 89) {
//     console.log('B');
// } else if (marks >= 60 && marks <= 69) {
//     console.log('C');
// } else if (marks >= 50 && marks <= 59) {
//     console.log('D');
// } else if (marks >= 0 && marks <= 49) {
//     console.log('F');
// } else {
//     console.log('Invalid marks');
// }


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// let monthUserInput = prompt('What day is today ?')
// let month = monthUserInput.toLowerCase()

// switch (month) {
//   case 'september':
//     console.log('the season is Autum')
//     break
//   case 'october':
//     console.log('the season is Autum')
//     break
//   case 'november':
//     console.log('the season is Autum')
//     break
//   case 'december':
//     console.log('the season is winter')
//     break
//   case 'january':
//     console.log('the season is winter')
//     break
//   case 'february':
//     console.log('the season is winter')
//     break
//   case 'march':
//     console.log('the season is spring')
//     break
//     case 'april':
//     console.log('the season is spring')
//     break
//     case 'may':
//     console.log('the season is spring')
//     break
//     case 'june':
//     console.log('the season is summer')
//     break
//     case 'july':
//     console.log('the season is summer')
//     break
//     case 'august':
//     console.log('the season is summer')
//     break
//   default:
//     console.log('It is not a month')
// }



// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is working day')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('saturday is weekend')
//     break
//   default:
//     console.log('It is not a week day.')
// }
//level3
//Q1 Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
//let monthUserInput = prompt('What month is today ?')
// let month = monthUserInput.toLowerCase()

// switch (month) {
//   case 'september':
//     console.log(' september has 31 day')
//     break
//   case 'october':
//     console.log(' occtober has 31 day')
//     break
//   case 'november':
//     console.log('the season is Autum')
//     break
//   case 'december':
//     console.log('the season is winter')
//     break
//   case 'january':
//     console.log('january has 28 days.')
//     break
//   case 'february':
//     console.log('February has 28 days.')
//     break
//   case 'march':
//     console.log('the season is spring')
//     break
//     case 'april':
//     console.log('the season is spring')yo aafai le random haneko
//     break
//     case 'may':
//     console.log('the season is spring')
//     break
//     case 'june':
//     console.log('the season is summer')
//     break
//     case 'july':
//     console.log('the season is summer')
//     break
//     case 'august':
//     console.log('the season is summer')
//     break
//   default:
//     console.log('It is not a month')
// } 
// let monthUserInput = prompt('Enter a month:');
// let month = monthUserInput.toLowerCase();

// switch (month) {
//   case 'january':
//   case 'march':
//   case 'may':
//   case 'july':
//   case 'august':
//   case 'october':
//   case 'december':
//     console.log(`${monthUserInput} has 31 days.`);  yo chai write ho
//     break;

//   case 'april':
//   case 'june':
//   case 'september':
//   case 'november':
//     console.log(`${monthUserInput} has 30 days.`);
//     break;

//   case 'february':
//     console.log(`${monthUserInput} has 28 days.`);
//     break;

//   default:
//     console.log('It is not a valid month.');
// }

// Write a program which tells the number of days in a month, now consider leap year.
// let monthUserInput = prompt("Enter a month:");
// let month = monthUserInput.toLowerCase();

// let year = prompt("Enter a year:");
// year = Number(year);

// switch (month) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     console.log(`${monthUserInput} has 31 days.`);
//     break;

//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     console.log(`${monthUserInput} has 30 days.`);
//     break;

//   case "february":
//     // check leap year
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       console.log(`${monthUserInput} has 29 days (Leap Year).`);
//     } else {
//       console.log(`${monthUserInput} has 28 days.`);
//     }
//     break;

//   default:
//     console.log("It is not a valid month.");
// }
//QLevel 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// Declare an empty array;
// const arr=Array();
// console.log(arr);
// Declare an array with more than 5 number of elements
// console.log(countries);
// Find the length of your array
// console.log(countries.length);
// Get the first item, the middle item and the last item of the array
// let firstitem=countries[0];
// let middleitem=countries[5];
// let lastitem=countries[10];
// console.log(firstitem,",",middleitem,",",lastitem);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let mixedArray = [20, "Prabin", true, { country: "Nepal" }, [1, 2, 3], null, undefined];
// console.log(mixedArray)
// different data types
// 20 → number

// "Prabin" → string

// true → boolean

// { country: "Nepal" } → object

// [1, 2, 3] → another array

// null

// undefined
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// let itCompanies=['Facebook','Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
// Print the array using console.log()
// console.log(countries);
// Print the number of companies in the array
// console.log(itCompanies);
// Print the first company, middle and last company
// let firstCompany=itCompanies[1]; middle=itCompanies[4];lastcompany=itCompanies[6]
// console.log(firstCompany,",",middle,",",lastcompany);
// Print out each company
// console.log(itCompanies)
// Change each company name to uppercase one by one and print them out
// console.log(itCompanies[i].toUppercase());
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.toString(),"and  Amazon are big IT companies.")
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// let company = prompt("Enter a company name:");
// company = company;   // make input case-insensitive

// // check
// if (itCompanies.includes(company)) {
//     console.log(`${company} exists in the array`);
// } else {
//     console.log(`${company} is not found`);
// }

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
// itCompanies.sort();
// console.log(itCompanies);
// Reverse the array using reverse() method
// itCompanies.reverse();
// console.log(itCompanies);
// Slice out the first 3 companies from the array
// console.log(itCompanies.slice(1,4));//google microsoft apple 1-4 samma ko element last ko element ni janxa
// Slice out the last 3 companies from the array
// console.log(itCompanies.slice(0,4));
// Slice out the middle IT company or companies from the array
// let middle = itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1);

// console.log(middle);

// Remove the first IT company from the array

// console.log(itCompanies.slice(0,1));

// Remove the middle IT company or companies from the array
// const middle=Math.floor(itCompanies.length/2);
// console.log(itCompanies.slice(0,middle).concat(itCompanies.slice(middle+1)));
// Remove the last IT company from the array
// console.log(itCompanies.slice(0,6));
// // Remove all IT companies
// console.log(itCompanies.splice());
// console.log(itCompanies.pop());
// level 2
// Create a separate countries.js file and store the countries array in to this file, 
// create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//  D5 ra d52 file import garxu
// import { d5 } from "./d5.js";
// import { webTechs } from "./web_techs.js";

// const combined = [countries, webTechs];

// console.log(combined);
// import { countries } from "./d5.js";
// import { webTechs } from "./d52.js";

// const combined = [countries, webTechs];
// console.log(combined);
//Q2
// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// l
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python';

// // 1. Remove punctuation
// let punctuations = ['.', ',', '/', '!', '?', ';', ':', '-', '_', '(', ')'];
// let chars = text.split('');   // change to array of characters

// let cleanedChars = chars.filter(char => !punctuations.includes(char));
// let cleanedText = cleanedChars.join(''); // join back into string

// // 2. Convert cleaned string to array of words
// let wordsArray = cleanedText.split(' ').filter(word => word !== "");

// // 3. Count number of words
// let wordCount = wordsArray.length;

// console.log(wordsArray);
// console.log("Total words:", wordCount);


// 13
//Q3
// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift('Meat');
// console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
// shoppingCart.push('sugar');
// console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
// let newCart = [];  // empty array

// for (let i = 0; i < shoppingCart.length; i++) {
//   if (shoppingCart[i] !== 'Honey') {
//     newCart.push(shoppingCart[i]);  // push only if not Honey
//   }
// }

// console.log(newCart);

// modify Tea to 'Green Tea'
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey', 'sugar'];

// let index = shoppingCart.indexOf('Tea');  // find Tea
// shoppingCart[index] = 'Green Tea';        // replace Tea with Green Tea

// console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let countries=['a','b','ETHIOPIA'];
// if(countries.includes('ETHIOPIA')){
//     console.log('ETHIOPIA')
// }else{
//     countries.push('ETHIOPIA');
//     console.log(countries);
// }
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
//same as above

// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack=frontEnd.concat(backEnd);
// console.log(fullStack);
// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age.
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// ages.sort();

// console.log("Sorted:", ages);
// console.log("Min:", ages[0]);
// console.log("Max:", ages[ages.length - 1]);

// Find the median age(one middle item or two middle items divided by two)
// let mid = Math.floor(ages.length / 2);

// 3. Since length is even → median = average of 2 middle values
// let median = (ages[mid - 1] + ages[mid]) / 2;

// console.log("Sorted:", ages);
// console.log("Median:", median);

// Find the average age(all items divided by number of items)
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// // 1. Find sum of all ages
// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
// }

// // 2. Average = sum / number of items
// let average = sum / ages.length;

// console.log("Sum =", sum);
// console.log("Average age =", average);

// Find the range of the ages(max minus min)
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// ages.sort();
// let min = ages[0];
// let max = ages[ages.length - 1];
// let range = max - min;
// console.log("Sorted:", ages);
// console.log("Range =", range);
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// // Sort numerically
// ages.sort((a, b) => a - b);

// // Min & Max
// let min = ages[0];
// let max = ages[ages.length - 1];

// // Average
// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
// }
// let average = sum / ages.length;

// // Compare using abs()
// let minDiff = Math.abs(min - average);
// let maxDiff = Math.abs(max - average);

// console.log("Min Difference:", minDiff);
// console.log("Max Difference:", maxDiff);
// const countries = [
//   "Nepal", "India", "Pakistan", "China", "Japan",
//   "Bhutan", "USA", "UK", "Canada", "Australia",
//   "Germany", "Finland"
// ];

// // Slice first 10 countries
// let firstTen = countries.slice(0, 10);

// console.log(firstTen);

// Find the middle country(ies) in the countries array
// let mid = (Math.floor(countries.length / 2));
// console.log(countries[mid-1]);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
// const half = Math.ceil(countries.length / 2);
// //10 countries → Math.ceil(10/2) = 5

// //11 countries → Math.ceil(11/2) = 6 (first half gets 6)
// const firstHalf = countries.slice(0, half);
// const secondHalf = countries.slice(half);

// console.log(firstHalf);
// console.log(secondHalf);
