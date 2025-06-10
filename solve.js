
// problem 1

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


console.log(isPalindrome("madaam")); // true
console.log(isPalindrome("hello")); // false



function fibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}

 
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]


function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example Usage
console.log(reverseString("hello")); // "olleh"



