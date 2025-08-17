// Problem -1

const reverseString = (str) =>{
    const splitString = str.split(" ");
    const reverseStr = splitString.reverse().join(" ");
    return reverseStr;
}
// console.log(reverseString("Hello World from JS"))


// Problem -2

const countVowels = (str)=>{
    const vowel = 'aeiouAEIOU';

    return [...str].filter(char => vowel.includes(char)).length;
}
// console.log(countVowels("Programming Hero"));


// Problem -3

const isPallindrome = (str) =>{
    const cleaned = str.toLowerCase();
    const reversedStr = cleaned.split("").reverse().join("");

    return cleaned === reversedStr;
}
// console.log(isPallindrome('Madam'));
// console.log(isPallindrome('hello'));