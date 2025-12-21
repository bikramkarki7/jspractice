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

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// Iterate 0 to 10 using for loop, do the same using while and do while loop
// const newArr = []
// for(let i = 0; i < countries.length; i++){
//   console.log(countries[i])
// }//\while loop
// let i = 0
// while (i < countries.length) {
//   console.log(countries[i])
//   i++
// }
// let i = 0;
// do {
//   console.log(countries[i]);
//   i++;
// } while (i < countries.length);
// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = countries.length - 1; i >= 0; i--) {
//   console.log(countries[i]);
// } //other also same
// Iterate 0 to n using for loop
// let n=10;
// for (let i =0; i<n; i++) {
//   console.log(i);
// }


// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
//  let line = "";

// for (let i = 1; i <= 7; i++) {
//   line += "#";       // add one # each loop
//   console.log(line); // print the growing line
// }

// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// let n=[0,1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}*${i}=${i*i}`); // print the growing line
// }

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// console.log("i   i^2   i^3");
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}   ${i*i}   ${i*i*i}`);
// }

// Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let num = 2; num <= 100; num++) {
//   let isPrime = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }


// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;   // keep adding every number to sum
// }

// console.log("Total sum =", sum);



// The sum of all numbers from 0 to 100 is 5050.

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;      // add even numbers
//   } else {
//     oddSum += i;       // add odd numbers
//   }
// }

// console.log("Even Sum =", evenSum);
// console.log("Odd Sum =", oddSum);

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenSum = evenSum + i;
//   } else {
//     oddSum = oddSum + i;
//   }
// }

// console.log([evenSum, oddSum]);

//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers
// let arr = [];

// for (let i = 0; i < 5; i++) {
//   arr.push(Math.floor(Math.random() * 101));//arr(20) = 20;   // arr = [10, 20]
// // Both work, but push() is easier and safer.
// }

// console.log(arr);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let arr = [];

// while (arr.length < 5) {
//   let num = Math.floor(Math.random() * 101); // 0–100

//   if (!arr.includes(num)) {   // only add if not already in array
//     arr.push(num);
//   }
// }

// console.log(arr);

// Develop a small script which generate a six characters random id:
// let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// let result = "";

// for (let i = 0; i < 5; i++) {
//   result += chars[Math.floor(Math.random() * chars.length)];
// }

// console.log(result);

// 5j2khz
// Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.
// let arr=[]
// let char = "0123456789ABCDEF";
//  while (arr.length < 6) {
//  let  hex= char[Math.floor(Math.random() * 16)]; // 0–100

//  if (!arr.includes(hex)) {   // only add if not already in array
//    arr.push(hex);
//   }
// }
// console.log(arr);
// '#ee33df'
// Write a script which generates a random rgb color number.
// let rgb = [];

// while (rgb.length < 3) {
// let num = Math.floor(Math.random() * 256); // 0–255
// rgb.push(num);
// }

// console.log(rgb);
// rgb(57, 246, 89)
// rgb(240,180,80)
// Using the above countries array, create the following new array.
// let countries=[ 'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya']
//   let newArr=[];
//   for(let i = 0; i < countries.length; i++){
//   newArr.push(countries[i])
// }
// console.log(newArr);

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.
// let newArr=[];
//   for(let i = 0; i < countries.length; i++){
//   newArr.push(countries[i].length)
// }
// console.log(newArr);
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:
// let newArr = [];

// for (let i = 0; i < countries.length; i++) {
//   newArr.push([
//     countries[i],                 // country
//     countries[i].slice(0, 3).toUpperCase(),  // 3-letter code
//     countries[i].length           // length
//   ]);
// }

// console.log(newArr);

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// In above countries array, check if there is a country or countries containing the word 'land'. 
// If there are countries containing 'land', print it as array. 
// If there is no country containing the word 'land', print 'All these countries are without land'.
// let newArr = [];

// for (let i = 0; i < countries.length; i++) {
// if (countries[i].toLowerCase().includes("land")) {
// newArr.push(countries[i]);
// }
// }

// if (newArr.length > 0) {
// console.log(newArr);
// } else {
// console.log("All these countries are without land");
// }

// ['Finland','Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. 
// If there are countries end with, print it as array. If there is no country containing the word 'ai',
// print 'These are countries ends without ia'.
// let newArr = [];

// for (let i = 0; i < countries.length; i++) {
// if (countries[i].toLowerCase().includes("ia","ai")) {
// newArr.push(countries[i]);
// }
// }

// if (newArr.length > 0) {
// console.log(newArr);
// } else {
// console.log("All these countries are without land");
// }

// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.
// let longest=countries[0];
//  for (let i = 1; i < countries.length; i++) {
// if (countries[i].length>longest.length) {
// longest=(countries[i]);
// }
// }
// console.log(longest);

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.
// let char=[];
//  for (let i = 1; i < countries.length; i++) {
// if (countries[i].length===5) {
// char.push(countries[i]);
// }
// }
// console.log(char);
// ['Japan', 'Kenya']
// Find the longest word in the webTechs array
//  const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// let longest=[];
//  for (let i = 1; i < webTechs.length; i++) {
// if (webTechs[i].length>longest.length) {
// longest=(webTechs[i]);
// }
// }
// console.log(longest);
// Use the webTechs array to create the following array of arrays:
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// const web=[4,3,10,5,5,4,7];
// const arrayOfarray=[web,webTechs];
// console.log(arrayOfarray);//[[word,number], [word,number], ...]//
// my[
//   [4,3,10,5,5,4,7],      // numbers only
//   [webTechs...]          // words only
// ]


// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ];

// let newArr = [];

// for (let i = 0; i < webTechs.length; i++) {
//   newArr.push([webTechs[i], webTechs[i].length]);
// }

// console.log(newArr);

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// const mernStack = ["MongoDB", "Express", "React", "Node"];

// let acronym = "";
// for (let i = 0; i < mernStack.length; i++) {
//   acronym += mernStack[i][0];   // take first letter of each technology
// }

// console.log(acronym); // MERN

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop 
// and print out the items.
// const newArr =["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
// for (let i=0;i<newArr.length;i++){
//   console.log(newArr[i]);
// }
// //forof
// const newArr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

// for (const tech of newArr) {
//   console.log(tech);
// }

// This is a fruit array ,['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// let Fruit=['banana', 'orange', 'mango', 'lemon']
// let newArr=[]
// for(let i=Fruit.length-1;i>=0;i--){
//   newArr.push(Fruit[i]);
// }
// console.log(newArr);
// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ];

// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j].toUpperCase());
//   }
// }
// Copy countries array(Avoid mutation)

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
// let newArr=[...countries,'nepal'];//no meutation
// console.log(countries);//still[same]
// console.log(newArr);//['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'nepal']
// Copy the array
// let sortedCountries = [...countries];

// // Sort the copied array
// sortedCountries.sort();

// console.log("Original:", countries); // original unchanged
// console.log("Sorted copy:", sortedCountries);//countries.sort() would change the original

// But sortedCountries.sort() only changes the copy

// So the original stays safe
// let arr = [1, 2, 3];
// arr.push(4);    // ❌ This mutates the original array
// console.log(arr); // [1,2,3,4]

// Sort the webTechs array and mernStack array
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// let sortedwebTechs=[...webTechs];
// sortedwebTechs.sort();
// console.log("Original:", webTechs); // original unchanged
// console.log("Sorted copy:", sortedwebTechs);
// Extract all the countries contain the word 'land' from the countries array and print it as array
// let newArr=[]
// for (let i = 0; i < countries.length; i++) {
// if (countries[i].toLowerCase().includes("land")) {
// newArr.push(countries[i]);
// }
// }

// if (newArr.length > 0) {
// console.log(newArr);
// } else {
// console.log("All these countries are without land");
// }
// Find the country containing the hightest number of characters in the countries array
// let newArr=[]
// for (let i = 0; i < countries.length; i++) {
// if (countries[i].length>newArr.length) {
// newArr=(countries[i]);
// }
// }
// console.log(newArr)
// Extract all the countries contain the word 'land' from the countries array and print it as array
// same as above
// Extract all the countries containing only four characters from the countries array and print it as array
// let newArr=[]
// for (let i = 0; i < countries.length; i++) {
// if (countries[i].length===4) {
// newArr=(countries[i]);
// }
// }
// console.log(newArr)---[0]
// Extract all the countries containing two or more words from the countries array and print it as array
// let newArr = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes(" ")) {   // check if it has two words
//     newArr.push(countries[i]);        // add to array
//   }
// }

// console.log(newArr);//--//no 2 or more 
// "South Africa",
// "United States",
// "United Kingdom",
// "New Zealand",
// "Saudi Arabia",they are the example of above qn but in my countries arry there is no available of two or more word in single array

// Reverse the countries array and capitalize each country and stored it as an array.
// const reversed = [];

// for (let i = countries.length - 1; i >= 0; i--) {
//   reversed.push(countries[i].toUpperCase());
// }

// console.log(reversed);

