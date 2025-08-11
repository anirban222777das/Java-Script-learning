// premitive datatypes

// 7 types: String ,Numer,Boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const isSide= null
let userEmail;// undefined

const id = Symbol('123')// symbol use 
const anotherid = Symbol('123')

console.log(id === anotherid)// not same with having the same numbers 

const bignumber = 23232323232323232323n // to implement bigint 

console.log(typeof bignumber);

// Reference (Non Primitive)[ Array , Objects, Functions]

const heros =["asdasda","asdasdasdf","asdaref"]

let myobj = {
    name: "Anirban",
    age: 20,
}

// function 
const myfunction = function(){
    console.log("Hello");
}
myfunction();
 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Premitive) , Heap(Non-Premitive) memory

const myname = "Anirban"
let anothername = myname

anothername = "Croundous"
console.log(anothername);
console.log(myname)
//Stack(Premitive) if the assined value gets changed it does not effect other because its gives u a copy of the value 

// heap memory 
let userone = {
    userid: 1234,
    username: "Anirban",
    userEmail:"asas@gmail.com",
}

let usertwo = userone;
usertwo.userid = 5678;
console.table(userone);
console.table(usertwo);
// if the the values are assined to heap memory then when its changed it will effect everywhere because its gives u a reference of the value not the copy 
