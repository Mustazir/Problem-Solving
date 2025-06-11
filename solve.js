
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

// Example Usage
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

// Example Usage
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

// Example Usage
fizzBuzz();
