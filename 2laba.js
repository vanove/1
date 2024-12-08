//1 задание
function basicOperation(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Invalid operation';
    }
}

let result = basicOperation('+', 5, 10); // result = 15
console.log(result); // 15
//2
function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, 3);
    }
    return sum;
}

let result1 = sumOfCubes(3); // result = 1^3 + 2^3 + 3^3 = 36
console.log(result1); // 36

//3
function average(arr) {
    if (arr.length === 0) return 0;
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

let result2 = average([1, 2, 3, 4, 5]); // result = (1 + 2 + 3 + 4 + 5) / 5 = 3
console.log(result2); // 3

//4
function reverseAlphabetOnly(str) {
    const filteredStr = str.replace(/[^a-zA-Z]/g, '');
    const reversedStr = filteredStr.split('').reverse().join('');
    return reversedStr;
}

let result4 = reverseAlphabetOnly("JavaScript"); // "tpircSavaJ"
console.log(result4); // "tpircSavaJ"

let result5 = reverseAlphabetOnly("JavaScr53э? ipt"); // "tpircSavaJ"
console.log(result5); // "tpircSavaJ"

//5
function repeatString(n, s) {
    return s.repeat(n);
}

let result6 = repeatString(3, 'abc'); // 'abcabcabc'
console.log(result6); // 'abcabcabc'

//6
function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

let arr1 = ["apple", "banana", "cherry", "date"];
let arr2 = ["banana", "date"];
let result7 = difference(arr1, arr2); // ["apple", "cherry"]
console.log(result7); // ["apple", "cherry"]
//стрелочная функция многострочная
let sum = (a,b) =>
    {
        let result =a+b;
        return result;
    }
console.log(result(1,2));//3
//стрелочная функция
let sum1 =(a,b)=>a+b;
//func expression
var diff=function(d,f)
{
    return d-f;
}
//func declaration
function mult(g,h)
{
    return g*h;
}
//cтрелочная функция как function expression
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
ask  
(
"вы согласны?",
()=>alert("вы согласились"),
()=>alert("вы не согласились")

);
