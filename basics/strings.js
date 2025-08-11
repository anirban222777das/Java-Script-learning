const name = "Anirban"
const repocount ="26"

console.log(name + repocount + "Value");// outdated
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// new method (thats pretty good 😊)


const gameName = new String('Anir-ban')
console.log(gameName[3]);

// using inbuild functions 
console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('A'));

const newString =gameName.substring(0,6) // not gonna include last one "Anirba" is the output
console.log(newString);

const anotherString = gameName.slice(-3,7) // ban is the output
console.log(anotherString);

const trimmer= "    Asdadsad      "
console.log(trimmer);
console.log(trimmer.trim() );// trim the extra space user sometimes uses
// +++++++++++++++++++++++++++++++++++++++++++++++
console.log(trimmer.trimStart()); // trim the space from the start
console.log(trimmer.trimEnd()); // trim the space from the end

const url = "https://gg.com"
console.log(url.replace('gg','dasda'))// to change any values inside const url


console.log(gameName.split('-')) // split according to - or other oparators if required