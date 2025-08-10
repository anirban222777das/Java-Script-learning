let score = true
let age = 20

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "20" => 20
// "123abc"=NaN
// true => 1; false =>0
let isLoggedIn ="0"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "Anirban" =>true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ******************** Operations **********************

let value = 3
let negValue= -value
console.log(negValue);

let str1 = "Hello World"
let str2 = " Python"

let str3 = str1+str2
console.log(str3);

// complex 
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32 
    // this is a example of bad code (messy code)

/// tricky conversions
console.log(+true); //1 
console.log(+""); //0

let gameCounter =100
gameCounter++
console.log(gameCounter);

