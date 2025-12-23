// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
//let firstName='Bikram', lastName='karki', country='nepal', city='bardibas', age=21, isMarried='false', year=0;
//console.log(typeof firstName);
//console.log(typeof age);
//Q2
//console.log(typeof '10' == typeof 10);   // false string,number
//Q3
// if (parseInt('9.8') == 10) {
//   console.log("Equal");
// } else {
//   console.log("Not equal");
// }

//Q3.//Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.
// let num=1;
// console.log(num==2);
// console.log(1);          // truthy
// console.log("Hello");    // truthy
// console.log(true);       // truthy
// console.log(0);        // falsy
// console.log("");       // falsy (empty string)
// console.log(false);    // falsy
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3	true	4 is greater
// 4 >= 3	true	4 is greater or equal
// 4 < 3	false	4 is not smaller
// 4 <= 3	false	not smaller or equal
// 4 == 4	true	equal (loose equality)
// 4 === 4	true	equal & same type
// 4 != 4	false	they are equal
// 4 !== 4	false	same value & type
// 4 != '4'	false	'4' converts to 4 → equal
// 4 == '4'	true	'4' converts to 4
// 4 === '4'	false	number !== string


//q7  Use the Date object to do the following activities

// What is the year today?
// const now= new Date()
// console.log(now.getYear());
// What is the month today as a number?
// const now= new Date()
//  console.log(now.getMonth());
// What is the date today?
// const now= new Date()
// console.log(now.getDate());
// What is the day today as a number?
// const now= new Date()
// console.log(now.getDay());//teusday 3 of week
// What is the hours now?
// const now= new Date()
// console.log(now.getHours());
// What is the minutes now?
// const now= new Date()
// console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
// let seconds =(Date.now() / 1000);  //let seconds = Math.floor(Date.now() / 1000);Math.floor removes second
// console.log(seconds);
 //Lev2
 //Q1
//  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
//  let height=prompt("enter the height");
//  let base=prompt("enter the base");
//  base = (base);
// height = (height);

//  let Area=(0.5*height*base);
//  console.log(Area);
//Q2
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and 
// and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// let a=prompt("enter side a ");
// let b=prompt("enter  side b");
// let c=prompt("enter  side c");
// a=(a);
// b=(b);
// c=(c);
// let perimeter=a+b+c;
// console.log("perimeter of triangle",perimeter);
//Q3
// Get length and width using prompt and calculate an area of rectangle 
// (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length=prompt("enter length ");
// let width=prompt("enter  width");
// length=Number(length);
// width=Number(width);
// let area=length*width;
// let perimeter=2*(length+width);
// console.log(area,perimeter);
//way2
// Use unary plus + to convert strings to numbers

// This is a very short and popular method.

// let length = +prompt("enter length");
// let width = +prompt("enter width");

// let area = length * width;
// let perimeter = 2 * (length + width);

// console.log(area, perimeter);
//way3
// Use parseInt()//convert string into integer
// let length = parseInt(prompt("enter length"));
// let width = parseInt(prompt("enter width"));

// let area = length * width;
// let perimeter = 2 * (length + width);

// console.log(area, perimeter);

//Q4
//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14
// let r=parseInt(prompt("enter a radius"));
// r=(r);
// const pi=3.14;
// let area =pi*r*r;
// let c=2*pi*r;
// console.log("area of circle:",area,"circumference  of circle:",c);
//Q5
//Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let m = 2;     // slope
// let b = -2;    // y-intercept

// // Slope
// let slope = m;

// // Y-intercept (0, b)
// let yIntercept = b;

// // X-intercept: set y = 0  ->  0 = mx + b  ->  x = -b/m
// let xIntercept = -b / m;

// console.log("Slope:", slope);
// console.log("Y-intercept: (0,", yIntercept + ")");
// console.log("X-intercept: (" + xIntercept + ", 0)");
//Q8
//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// x=3;
// let y=(x**2)+(6*x)+9;
// console.log(y);

// x=-3;
// let y=(x**2)+(6*x)+9;
// console.log(y);
//Q7
//console.log("Are the slopes equal?", m1 === m2)
//Q9
// let hrs=prompt('enter the hrs');
// hrs=(hrs);
// let rate=prompt('enter rate per hrs');
// rate=(rate);
// let salary=rate*hrs;
// console.log(salary);
//Q10
//If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name=prompt('enter your name');
// name.length>7//condition
//  ?console.log("your name is long")//?use for true condition
// :console.log("your name is short");//: use for false condition
//Q11
//Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// // Your first name, Asabeneh is longer than your family name, Yetayeh
// let firstName='bikram'
// let familyName='bikramfamily'
// familyName.length>firstName.length
// ?console.log('Your first name, Asabeneh is longer than your family name, Yetayeh')
// :console.log('your name is long');
//Q12
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// let myAge=250
// let yourAge=25
// myAge>yourAge
// ?console.log('I am 250 years older than you.')
// :console.log('I am 25 younger than you');
//Q13
// Using prompt get the year the user was born and if the user is 18 or above allow the user 
// to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// let birthYear = prompt("Enter birth year:")
// let currentYear = new Date().getFullYear()
// let age = currentYear - Number(birthYear)
// age >= 18
//   ? console.log(`You are ${age}. You are old enough to drive`)
//   : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`)
//Q14
// Write a script that prompt the user to enter number of years. 
// Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
// let years = prompt("Enter number of years you live:")
// let seconds = Number(years) * 365 * 24 * 60 * 60
// console.log(`You lived ${seconds} seconds.`)
//Q15
// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// const now = new Date();

// const year  = now.getFullYear();
// const month = now.getMonth() + 1;  // still need +1 because JS months are 0–11
// const day   = now.getDate();
// const hour  = now.getHours();
// const min   = now.getMinutes();

// // booleans to add leading zero
// const M  = (month < 10 ? "0" + month : month);//yo ? chai 10 vanda kam huda jastai month ma 4 xa vane aagadi 04 hunxa 11 xa vane
// //  : (false)aafai 11 nai hunxa
// const D  = (day < 10 ? "0" + day : day);
// const H  = (hour < 10 ? "0" + hour : hour);
// const MM = (min < 10 ? "0" + min : min);

// // YYYY-MM-DD HH:mm
// const format1 = year + "-" + M + "-" + D + " " + H + ":" + MM;

// // DD-MM-YYYY HH:mm
// const format2 = D + "-" + M + "-" + year + " " + H + ":" + MM;

// // DD/MM/YYYY HH:mm
// const format3 = D + "/" + M + "/" + year + " " + H + ":" + MM;

// console.log(format1);
// console.log(format2);
// console.log(format3);
// level 3  Q1 
// // Create a human readable time format using the Date time object. 
// // The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// // YYY-MM-DD HH:mm eg. 2012-01-02 07:05
// const now=new Date();
// const year  = now.getFullYear();
// const month = now.getMonth() + 1;  //0-11 hunxa js ma so +1 then december
// const day   = now.getDate();
// const hour  = now.getHours();
// const min   = now.getMinutes();
// const M  = (month < 10 ? "0" + month : month);
// const D  = (day < 10 ? "0" + day : day);
//  const H  = (hour < 10 ? "0" + hour : hour);
//  const MM = (min < 10 ? "0" + min : min);
// const format1 = year + "-" + M + "-" + D + " " + H + ":" + MM;
//console.log(format1);/





