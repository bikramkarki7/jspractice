// // Let us access the first character in 'JavaScript' string.

// let string = 'JavaScript'
// // let firstLetter = string[0]
// // console.log(firstLetter) // J
// // let secondLetter = string[1] // a
// // let thirdLetter = string[2]
// // let lastLetter = string[9]
// // console.log(lastLetter) // t
// let lastIndex = string.length - 1
// console.log(lastIndex) // 9
// console.log(string[lastIndex]) //
// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index

// string.charCodeAt(index)
// let string = '30 Days Of JavaScript'
// console.log(string.charCodeAt(3)) // D ASCII number is 68
// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex)) // t ASCII is 116 

// concat(): it takes many substrings and creates concatenation.
// string.concat(substring, substring, substring)
// let string = '30'
// console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript
// let country = 'Fin'
// console.log(country.concat("land")) // Finland


// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
// let string = 'Love is the best to in this world'
// console.log(string.endsWith('world')) // true
// console.log(string.endsWith('love')) // false
// console.log(string.endsWith('in this world')) // true

// let country = 'Finland'
// console.log(country.endsWith('land')) // true
// console.log(country.endsWith('fin')) // false
// console.log(country.endsWith('Fin')) //  false


// includes()
// let string='30 days';
// console.log(string.includes('30'));// tesma xa xaina t/f ma result dinxa includes() le

// indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

// string.indexOf(substring)
// let string = '30 Days Of JavaScript'
// console.log(string.indexOf('D'))          // 3
// console.log(string.indexOf('Days'))       // 3
// console.log(string.indexOf('days'))       // -1


// / lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.lastIndexOf('love'))       // 67


// // length: The string length method returns the number of characters in a string included empty space. Example:

// let js = 'JavaScript'
// console.log(js.length)        // 10
// let firstName = 'Asabeneh'
// console.log(firstName.length) // 8
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.';
// let pattern = /love/gi;
// console.log(string.match(pattern));
// love → the word you want to search for

// g → global (find ALL matches, not just the first one)

// i → ignore case (match Love, LOVE, love, LoVe… all the same)


// // match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// let string = 'love'
// let patternOne = /love/ // with out any flag
// let patternTwo = /love/gi // g-means to search in the whole text, i - case insensitive
// string.match(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.match('love')) //
// /*
// output

// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
// */
// let pattern = /love/gi
// console.log(string.match(pattern)) // ["love", "love", "love"]
// // Let us extract numbers from text using regular expression. This is not regular expression section, no panic.

// let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge'
// let regEx = /\d/g // d with escape character means d not a normal d instead acts a digit
// // + means one or more digit numbers, 
// // if there is g after that it means global, search everywhere.
// console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]+

// // repeat(): it takes a number argument and it returned the repeated version of the string.
// string.repeat(n)
// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

// replace(): takes to parameter the old substring and new substring.
// string.replace(oldsubstring, newsubstring)

// let string = '30 Days Of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
// let country = 'Finland'
// console.log(country.replace('Fin', 'Noman')) // Nomanland

// search: it takes a substring as an argument and it returns the index of the first match.
// string.search(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.search('love')) // 2


// // split(): The split method splits a string at a specified place.
// let string = '30 Days Of JavaScript'
// console.log(string.split())     // ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
// let firstName = 'Asabeneh'
// console.log(firstName.split())  // ["Asabeneh"]
// console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]
// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
// console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)
// let string = 'Love is the best to in this world'
// console.log(string.startsWith('Love')) // true
// console.log(string.startsWith('love')) // false
// console.log(string.startsWith('world')) // false

// let country = 'Finland'
// console.log(country.startsWith('Fin')) // true
// console.log(country.startsWith('fin')) // false
// console.log(country.startsWith('land')) //  false


// substr(): It takes two arguments,the starting index and number of characters to slice.
// let string = 'JavaScript'
// console.log(string.substr(4,6))    // Script
// let country = 'Finland'
// console.log(country.substr(3, 4))   // land

// substring(): It takes two arguments,the starting index and the stopping index but it doesn't include the stopping index.
// let string = 'JavaScript'
// console.log(string.substring(0,4))   // Java
// console.log(string.substring(4,10))     // Script
// console.log(string.substring(4))    // Script
// let country = 'Finland'
// console.log(country.substring(0, 3))   // Fin
// console.log(country.substring(3, 7))   // land
// console.log(country.substring(3))   // land

// // toLowerCase(): this method changes the string to lowercase letters.
// let string = 'JavasCript'
// console.log(string.toLowerCase())     // javascript
// toUpperCase(): this method changes the string to uppercase letters.

// let string = 'JavaScript'
// console.log(string.toUpperCase())      // JAVASCRIPT
// let firstName = 'Asabeneh'
// console.log(firstName.toUpperCase())  // ASABENEH

// ////trim(): Removes trailing space in the beginning or the end of a string.
// let string = '   30 Days Of JavaScript   '
// console.log(string)     // 
// console.log(string.trim(' '))  // 
// let firstName = ' Asabeneh '
// console.log(firstName)
// console.log(firstName.trim())  // 


// const PI = Math.PI
// console.log(PI) // 3.141592653589793
// console.log(Math.round(PI)) // 3; to round values to the nearest number
// console.log(Math.round(9.81)) // 10
// console.log(Math.floor(PI)) // 3; rounding down
// console.log(Math.ceil(PI)) // 4; rounding up
// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

// const randNum = Math.random() // creates random number between 0 to 0.999999
// console.log(randNum)
// // Let create random number between 0 to 10
// const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
// console.log(num)

// //Absolute value
// console.log(Math.abs(-10)) //10
// //Square root
// console.log(Math.sqrt(100)) // 10
// console.log(Math.sqrt(2)) //1.4142135623730951
// // Power
// console.log(Math.pow(3, 2)) // 9
// console.log(Math.E) // 2.718//euler number

// // Logarithm
// //Returns the natural logarithm of base E of x, Math.log(x)
// console.log(Math.log(2)) // 0.6931471805599453
// console.log(Math.log(10)) // 2.302585092994046

// // Trigonometry
// console.log(Math.sin(0))
// console.log(Math.sin(60))
// console.log(Math.cos(0))
// console.log(Math.cos(60))


// let nums = [1, 2, 3]
// nums[0] = 10
// console.log(nums) // [10, 2, 3]

// let nums = [1, 2, 3]
// let numbers = [1, 2, 3]
// console.log(nums == numbers) // false // nums points to one array in memory //numbers points to  a different array

// let numbers = nums
// console.log(nums == numbers)  // true



// let userOne = {
//   name: 'Asabeneh',
//   role: 'teaching',
//   country: 'Finland'
// }
// let userTwo = {
//   name: 'Asabeneh',
//   role: 'teaching',
//   country: 'Finland'
// }
// console.log(userOne == userTwo) // false //Even though the objects look identical, they are stored in different memory locations. js dont allow

// let userOne = {
// name:'Asabeneh',
// role:'teaching',
// country:'Finland'
// }
// let userTwo = userOne
// console.log(userOne == userTwo)  // true

// let age = 35
// const gravity = 9.81 //we use const for non-changing values, gravitational constant in  m/s2
// let mass = 72 // mass in Kilogram
// const PI = 3.14 // pi a geometrical constant

// //More Examples
// const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
// const bodyTemp = 37 // oC average human body temperature, which is a constant
// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)






// let word = 'JavaScript'
// // we dont' modify string 
// // we don't do like this, word[0] = 'Y' 
// let numOne = 3
// let numTwo = 3
// console.log(numOne == numTwo)      // true// because primitive are compared by number

// let js = 'JavaScript'
// let py = 'Python'
// console.log(js == py)             //false 

// let lightOn = true
// let lightOff = false
// console.log(lightOn == lightOff) // false




// Declaring different variables of different data types
// let space = ' '
// age=30
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// // Concatenating using addition operator
// let fullName = firstName + space + lastName // concatenation, merging two string together.
// console.log(fullName)

// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
// console.log(personInfoOne)
// // Concatenation: Template Literals(Template Strings)
// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)

// let space = ' ' // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'