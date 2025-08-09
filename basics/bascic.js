// // const interestRate = 0.3;
// // // interestRate = 1;
// // console.log(interestRate);


// // premative datatypes
// // let name='Anirban';
// // let number=90;
// // let isApproved = true; //boolean 
// // let firstName = undefined;
// // let selectedColor = null;

// // console.log(name,number,isApproved,firstName,selectedColor);

// // let person ={
// //     name: 'Anirban',
// //     age:30
// // };
// // console.log(person.name);

// // // dot notation method
// // person.name='jackass';
// // console.log(person);
 
// // // bracket notetion method
// // person['name']= 'Anirban';
// // console.log(person.name);

// // let selection= 'name';
// // person[selection]= 'messi';
// // console.log(person);

// // let selectedColor = ['blue','red'];
// // selectedColor[2]= 1;
// // console.log(selectedColor);
// // console.log(selectedColor.length);

// function greet(){
//     console.log('hello world');
// }

// greet();

// function antagonse(name,LastName){
//     console.log('hello '+ name+' ' +LastName);
// }

// antagonse('Anirban','Das');
// antagonse('Anup');
// antagonse();

// function square(number){
//     return number * number;
    
// }
// console.log(square(2));

// function squares(number,numbers){
//     let yoga=number * numbers;
//     return yoga;
// }
// console.log(squares(2,3));

// Write a function `fullName(firstName, lastName)`
// that returns a full name string like: "Anirban Das"
function fullName(firstName,lastName){
        console.log(firstName+' '+lastName);
}
fullName('Anirban','Das');

// Write a function that takes two numbers,
// squares the first number, and multiplies it with the second number.
// Example: input (2, 3) → output: 4 * 3 = 12
function finalnumber(firstnumber,secondnumber){
    firstnumber= firstnumber* firstnumber;
    let newnumber = firstnumber*secondnumber;
    return newnumber;
}
console.log(finalnumber(2,3));

// Write a function `isEven(number)` that returns:
// "Even" if the number is even, "Odd" if it's odd
function isEven(number){
        if(number% 2== 0){
            return "Even";
        }
        else{
            return "odd";
        }
}
console.log(isEven(7));

// Create an array with 5 of your favorite colors.
// Print the first and last color in the list.
let favoriteColor = ["Black","Purple","Green","White","Red"];
console.log(favoriteColor[0]);
console.log(favoriteColor[4]);

// Create an object `car` with properties:
// brand, year, and color
// Then update the color to something else and print the object
let car ={
    brand: "BMW",
    year:2012,
    color:"Yellow"
}
car.color="Pink";
console.log(car);
// Write a function `greetUser(name, timeOfDay)`
// Example:
// greetUser("Anirban", "morning") → Hello Anirban, good morning!
function greetUser(name,timeOfDay){
    console.log("Hello "+name +', '+ 'good '+timeOfDay+'!');
}
greetUser('Anirban','morning');
// Write a function `getArea(length, width)`
// that returns area = length * width
function getArea(length,width){
    let area = length* width;
    return area;
}
console.log(getArea(20,14));
// Create a function `sumArray(arr)` that takes an array of numbers
// and returns the sum of all elements
// Example: sumArray([1, 2, 3]) → 6
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumArray([1, 2, 3]));     
console.log(sumArray([8, 10, 12]));   

// Create two variables: a = 5, b = 10
// Write code to swap their values (so a becomes 10 and b becomes 5)
function Swapper(number1,number2){
        let number3;
        number3 = number1;
        number2=number1;
        number3=number1;
        console.log('after swap '+number1 +' ' +number2);
}
Swapper(5,10);


console.log(typeof undefined);

let god = null
let god2Number = Number(god)
console.log(typeof god2Number)
console.log(god2Number)