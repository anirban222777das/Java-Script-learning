// Q1: Write a JavaScript function to reverse a string. 
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); // Output: "olleH"


// Q2: Given an array of numbers, return the sum of all elements.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// Q3: Check if a given number is prime.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false


// Q4: Find the maximum number in an array without using Math.max().
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
console.log(findMax([3, 9, 2, 5, 7])); // Output: 9


// Q5: Count how many times a specific character appears in a string.
function countChar(str, char) {
    return str.split("").filter(c => c === char).length;
}
console.log(countChar("hello world", "l")); // Output: 3


// Q6: Write a function that returns the factorial of a number.
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120


// Q7: Merge two arrays and remove duplicate values.
function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeUnique([1, 2, 3], [2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]


// Q8: Check if a string is a palindrome.
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("Hello")); // Output: false


// Q9: Find the second largest number in an array.
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log(secondLargest([5, 3, 9, 9, 2, 8])); // Output: 8


// Q10: Capitalize the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capitalizeWords("hello world from javascript")); 
// Output: "Hello World From Javascript"


// Q11: Find the intersection of two arrays.
function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]


// Q12: Count vowels in a string.
function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels("JavaScript is awesome")); // Output: 8
