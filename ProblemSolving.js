// Problem 1: Reverse a String

const reverseString = (str) =>{
    const splitString = str.split(" ");
    const reverseStr = splitString.reverse().join(" ");
    return reverseStr;
}
// console.log(reverseString("Hello World from JS"))


// Problem 2: Count Vowels in a String

const countVowels = (str)=>{
    const vowel = 'aeiouAEIOU';

    return [...str].filter(char => vowel.includes(char)).length;
}
// console.log(countVowels("Programming Hero"));


// Problem 3: Check for Palindrome

const isPallindrome = (str) =>{
    const cleaned = str.toLowerCase();
    const reversedStr = cleaned.split("").reverse().join("");

    return cleaned === reversedStr;
}
// console.log(isPallindrome('Madam'));
// console.log(isPallindrome('hello'));


// Problem 4: Find the Maximum Number
const findMax = (arr)=>{
    const max = Math.max(...arr);
    return max;
}
// console.log(findMax([5,2,9,3]));


// Problem 5: Remove Duplicates from an Array

const deDuplicate = (arr) =>{
    const unique = arr.reduce((acc, value) =>{
        if(!acc.includes(value)) acc.push(value)
            return acc;
    }, [])

    return unique
}
// console.log(deDuplicate([3,2,3,6,1,9,5,9,4]));


// Problem 6: Sum of All Numbers in an Array
const sum = (arr) =>{
    let total =  0;
    for (const n of arr) total += n;
    return total;
}

// console.log(sum([1,2,3,4]));

// Problem 7: Find Even Numbers in an Array
const findEven = (arr)=>{
    const even = arr.filter(n => n % 2 === 0)
    return even;
}

// console.log(findEven([1,2,3,4,5,6]));


// Problem 8: Capitalize First Letter of Each Word
const capitalizeWords = (str) =>{
    const capWord = str.split(" ").map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w).join(" ");

    return capWord;
}

// console.log(capitalizeWords("hello word"));


// Problem 9: Find the Factorial of a Number using a loop
const factorial = (n) =>{
    let res = 1;
    for(let i = 2; i <= n; i++) res *=i;

    return res;
}
// console.log(factorial(5));