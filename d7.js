// Declare a function fullName and it print out your full name.
// function fullName(){
//     console.log('bikram');
// }
// fullName()
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// Declare a function fullName that takes firstName and lastName as parameters
// function fullName(firstName, lastName){
//     return firstName + " " + lastName;
// }

// // Calling the function
// console.log(fullName("Bikram", "Karki"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
// function addNumbers(num1,num2){
//     return sum=num1+num2;
// }

// // Calling the function
// console.log(addNumbers(1,2));
// Declare a function fullName that takes firstName and lastName as parameters
// function fullName(firstName, lastName){
//     return firstName + " " + lastName;
// }

// // Calling the function
// console.log(fullName("bikram", "karki"));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// Function to calculate the area of a rectangle
// function areaOfRectangle(length, breadth) {
//     return length * breadth;
// }

// // Calling the function with actual values
// console.log(areaOfRectangle(10, 5)); // Example: length=10, breadth=5


// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeterOfRectangle(length, breadth) {
//     return perimeter= 2*(length + breadth);
// }

// // Calling the function with actual values
// console.log(perimeterOfRectangle(10, 5));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// // Function to calculate the volume of a rectangle
// function volumeOfRectangle(length, breadth,hight) {
//     return length * breadth*hight;
// }

// // Calling the function with actual values
// console.log(volumeOfRectangle(10, 5,10)); 

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// function areaOfCircle(r) {
//     const pi = 3.14;
//     return pi * r * r;
// }

// console.log(areaOfCircle(1));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// function perimeterOfCircle(r) {
//     const pi = 3.14;
//     return pi * r * 2;
// }

// console.log(perimeterOfCircle(1));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// function density(mass,volume) {
//     return mass/volume;
// }

// console.log(density(2,2));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken
// . Write a function which calculates a speed of a moving object, speed.
// function areaOfCircle(km,hrs) {
//     return km*hrs;
// }

// console.log(areaOfCircle(2,3,),'km/hrs');

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// function weight(m) {
//     const g =9.8;
//         return m*g;
// }

// console.log(weight(2));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// function Temperature(oC) {
//     return oC*(9/5)+32;
// }

// console.log(`oF=${Temperature(1)}`);
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
//  BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// Function to calculate BMI
// function bmi(weight, height) {
//     return weight / (height * height);
// }

// // Calculate BMI for a sample person
// let result = bmi(60, 1.7); // weight = 60kg, height = 1.7m
// console.log("BMI:", result);

// // Check BMI category
// if (result < 18.5) {
//     console.log("Underweight");
// } else if (result >= 18.5 && result <= 24.9) {
//     console.log("Normal weight");
// } else if (result >= 25 && result <= 29.9) {
//     console.log("Overweight");
// } else {
//     console.log("Obese");
// }

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// Function that returns the season based on month number
// function checkSeason(month) {
//     if (month === 12 || month === 1 || month === 2) {
//         return "Winter";
//     } else if (month >= 3 && month <= 5) {
//         return "Spring";
//     } else if (month >= 6 && month <= 8) {
//         return "Summer";
//     } else if (month >= 9 && month <= 11) {
//         return "Autumn";
//     } else {
//         return "Invalid month";
//     }
// }

// // Test the function
// console.log(checkSeason(1));   // Winter
// console.log(checkSeason(5));   // Spring
// console.log(checkSeason(7));   // Summer
// console.log(checkSeason(10));  // Autumn

// Math.max returns its largest argument. Write a function
//  findMax that takes three arguments and returns their maximum with out using Math.max method.
// function findMax(a, b, c) {
//     let max = a;          // assume a is max

//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }

//     return max;
// }

// console.log(findMax(10, 5, 8));  // Output: 10
// console.log(findMax(3, 7, 2));   // Output: 7
// console.log(findMax(-1, -5, -3));// Output: -1

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
// Q lev 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function generalSolution(a, b, c) {
//     if (a === 0 && b === 0) {
//         return c === 0 ? "All x, y are solutions" : "No solution exists";
//     } else if (b !== 0) {
//         return `y = (-${a}x - ${c}) / ${b}`;
//     } else if (a !== 0) {
//         return `x = (-${b}y - ${c}) / ${a}`;
//     }
// }

// console.log(generalSolution(2, 3, -6)); // y = (-2x + 6) / 3
// console.log(generalSolution(0, 0, 0));  // All x, y are solutions
// console.log(generalSolution(0, 0, 5));  // No solution exists

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// function solveQuadratic(a, b, c) {
//     if (a === 0) {
//         return b !== 0 ? { x: -c / b } : c === 0 ? "Infinite solutions" : "No solution";
//     }

//     let discriminant = b * b - 4 * a * c;

//     if (discriminant > 0) {
//         let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return { x1, x2 };
//     } else if (discriminant === 0) {
//         let x = -b / (2 * a);
//         return { x };
//     } else {
//         // No real roots
//         return "No real roots";
//     }
// }

// // Test cases
// console.log(solveQuadratic(0, 0, 0));       // Infinite solutions
// console.log(solveQuadratic(1, 4, 4));       // { x: -2 }
// console.log(solveQuadratic(1, -1, -2));     // { x1: 2, x2: -1 }
// console.log(solveQuadratic(1, 7, 12));      // { x1: -3, x2: -4 }
// console.log(solveQuadratic(1, 0, -4));      // { x1: 2, x2: -2 }
// console.log(solveQuadratic(1, -1, 0));      // { x1: 1, x2: 0 }

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// Function that prints each element of an array
// function printArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// // Example usage:
// printArray([1, 2, 3]);
// printArray(["apple", "banana", "cherry"]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
// function showDateTime() {
//     const now = new Date();

//     // Get day, month, year
//     const day = String(now.getDate()).padStart(2, '0');
//     const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const year = now.getFullYear();

//     // Get hours and minutes
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');

//     // Format date and time
//     const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;

//     console.log(formattedDateTime);
// }

// Example usage
// showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// function swapValues(x, y) {
//     // Swap using a temporary variable
//     let temp = x;
//     x = y;
//     y = temp;

//     return { x, y }; // Return as an object
// }

// // Example usage
// console.log(swapValues(3, 4)); // { x: 4, y: 3 }
// console.log(swapValues(1, 2)); // { x: 2, y: 1 }

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// // Test cases
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A']

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray(arr) {
//     let capitalized = [];
//     for (let i = 0; i < arr.length; i++) {
//         capitalized.push(arr[i].toUpperCase());
//     }
//     return capitalized;
// }

// // Test
// console.log(capitalizeArray(["apple", "banana", "cherry"])); 
// // Output: ["APPLE", "BANANA", "CHERRY"]

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// function addItem(item) {
//     let arr = [];      // start with an empty array
//     arr.push(item);    // add the item
//     return arr;
// }

// // Test
// console.log(addItem("apple"));   // ["apple"]
// console.log(addItem(42));        // [42]

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// function removeItem(arr, item) {
//     const index = arr.indexOf(item); // find the index of the item
//     if (index !== -1) {
//         arr.splice(index, 1);       // remove 1 element at that index
//     }
//     return arr;
// }

// // Test
// let fruits = ["apple", "banana", "cherry"];
// console.log(removeItem(fruits, "banana")); // ["apple", "cherry"]
// console.log(removeItem(fruits, "orange")); // ["apple", "cherry"] (item not found)


// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Writ a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE
// 1️⃣ Sum all numbers from 0 to n
// function sumOfNumbers(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// // 2️⃣ Sum all odd numbers from 0 to n
// function sumOfOdds(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i += 2) {
//         sum += i;
//     }
//     return sum;
// }

// // 3️⃣ Sum all even numbers from 0 to n
// function sumOfEven(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i += 2) {
//         sum += i;
//     }
//     return sum;
// }

// // 4️⃣ Count evens and odds from 0 to n
// function evensAndOdds(n) {
//     let evens = 0;
//     let odds = 0;

//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0) evens++;
//         else odds++;
//     }

//     console.log(`The number of odds are ${odds}.`);
//     console.log(`The number of evens are ${evens}.`);
// }

// // 5️⃣ Sum any number of arguments
// function sum(...args) {
//     return args.reduce((acc, curr) => acc + curr, 0);
// }

// // 6️⃣ Generate random user IP
// function randomUserIp() {
//     const ip = [];
//     for (let i = 0; i < 4; i++) {
//         ip.push(Math.floor(Math.random() * 256));
//     }
//     return ip.join('.');
// }

// // 7️⃣ Generate random MAC address
// function randomMacAddress() {
//     const hexDigits = "0123456789ABCDEF";
//     let mac = [];
//     for (let i = 0; i < 6; i++) {
//         let pair = hexDigits[Math.floor(Math.random() * 16)] + hexDigits[Math.floor(Math.random() * 16)];
//         mac.push(pair);
//     }
//     return mac.join(':');
// }

// // 8️⃣ Generate random hexadecimal color
// function randomHexaNumberGenerator() {
//     let hex = "#";
//     const hexDigits = "0123456789abcdef";
//     for (let i = 0; i < 6; i++) {
//         hex += hexDigits[Math.floor(Math.random() * 16)];
//     }
//     return hex;
// }

// // 9️⃣ Generate random 7-character user ID
// function userIdGenerator() {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let id = "";
//     for (let i = 0; i < 7; i++) {
//         id += chars[Math.floor(Math.random() * chars.length)];
//     }
//     return id;
// }

// // ------------------ TESTS ------------------
// console.log("sumOfNumbers(10):", sumOfNumbers(10)); // 55
// console.log("sumOfOdds(10):", sumOfOdds(10));       // 25
// console.log("sumOfEven(10):", sumOfEven(10));       // 30
// evensAndOdds(100);
// console.log("sum(1,2,3,4):", sum(1,2,3,4));         // 10
// console.log("randomUserIp():", randomUserIp());
// console.log("rando"0
