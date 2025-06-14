
// problem 1

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// problem 2

function fibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}

 
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]




// problem 3
function reverseString(str) {
  return str.split('').reverse().join('');
}


console.log(reverseString("hello")); // "olleh"



// problem 4

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}


console.log(factorial(5)); // 120



// problem 5

function largestNumber(arr) {
  return Math.max(...arr);
}

 
console.log(largestNumber([4, 1, 8, 7, 2])); // 8


// problem 6

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// problem 7


function isAnagram(str1, str2) {
  const format = str => str.toLowerCase().split('').sort().join('');
  return format(str1) === format(str2);
}

 
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false



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


console.log(sumOfDigits(123)); // 6

// Problem 10

function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}


console.log(customMap([1, 2, 3], x => x * 2)); // [2, 4, 6]

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


console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false


// Problem 12

function deepEqual(obj1, obj2) {
  // If both values are strictly equal, they are equal
  if (obj1 === obj2) return true;

  // If either value is not an object, they are not equal
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false;
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If they have a different number of keys, they are not equal
  if (keys1.length !== keys2.length) return false;

  // Recursively check each key and value
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Test Cases
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
