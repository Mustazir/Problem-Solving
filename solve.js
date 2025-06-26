
// problem 1

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello")); 


// problem 2

function fibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}

 
console.log(fibonacci(5));




// problem 3
function reverseString(str) {
  return str.split('').reverse().join('');
}


console.log(reverseString("hello")); 


// problem 4

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}


console.log(factorial(5)); 



// problem 5

function largestNumber(arr) {
  return Math.max(...arr);
}

 
console.log(largestNumber([4, 1, 8, 7, 2])); 


// problem 6

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 

// problem 7


function isAnagram(str1, str2) {
  const format = str => str.toLowerCase().split('').sort().join('');
  return format(str1) === format(str2);
}

 
console.log(isAnagram("listen", "silent"));  
console.log(isAnagram("hello", "world")); 



// problem 8

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


fizzBuzz();


// problem 9

function sumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}


console.log(sumOfDigits(123)); 

// Problem 10

function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}


console.log(customMap([1, 2, 3], x => x * 2)); 

// Problem 11

function deepEqual(obj1, obj2) {
 
  if (obj1 === obj2) return true;


  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false;
  }

 
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);


  if (keys1.length !== keys2.length) return false;


  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}


console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));  
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); 
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));  
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); 


// Problem 12

function deepEqual(obj1, obj2) {
 
  if (obj1 === obj2) return true;

  
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false;
  }

  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);


  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}


console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); 
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); 
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); 
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); 



// Problem 13

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(5));


// Problem 14

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0));

// Problem 15

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello"));


// Problem 16

function secondLargest(arr) {
  let unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}
