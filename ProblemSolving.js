// Problem -1
const str = "Hello World From JS";

// const reverseString = (str) => [...str].reverse().join(""); (ideal for reversing characters only)
const reverseString = (str) =>{
    const splitString = str.split(" ");
    const reverseStr = splitString.reverse().join(" ");
    return reverseStr;
}
// console.log(reverseString(str))


// Problem -2
const str2 = "Programming Hero";

const countVowels = (str2)=>{
    const vowel = 'aeiouAEIOU';

    return [...str2].filter(char => vowel.includes(char)).length;
}
// console.log(countVowels(str2));