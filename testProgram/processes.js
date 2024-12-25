/*console.log(process.argv[0]);//node path
console.log(process.argv[1]);//excution file path
console.log(process.argv[2]);//Frist Argument
console.log(process.argv[3]);//Second Argument*/


const nameArg = lowerCase(process.argv[2] || "Victor");// To Replace Empty Value
                                                           
console.log(`In LowerCase : ${nameArg}`);

function lowerCase(name){
    console.log("Before : ",name);
    name = name.trim().toLowerCase();// captalize return Lower Case Value 
    return name;
}

const getArr = changeToArr(process.argv[3] || "Kavin Kumar");// To Replace Empty Value
                                                          
console.log(`In Array : ${getArr}`);

function changeToArr(name){
    console.log("Before : ",name);
    name = name.trim().toLowerCase().split(" ");// change string to array  
    return name;
}

const getName = capitalization(process.argv[2] || "Victor");

console.log(`Capitalization : ${getName}`); 

function capitalization(words){
    return words = words.trim().toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1));// To covert the array values first letter to UpperCase
}