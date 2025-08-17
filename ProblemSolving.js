// Problem -1
const str = "Hello World From JS";

// const reverseString = (str) => [...str].reverse().join(""); (ideal for characters only)
const reverseString = (str) =>{
    const splitString = str.split(" ");
    const reverseStr = splitString.reverse().join(" ");
    return reverseStr;
}
// console.log(reverseString(str))