// 1. Two Sum
var twoSum = function (nums, target) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                res.push(i, j)
            }
        }
    }
    return res
};

// console.log(twoSum([2,7,11,15], 9))

// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return Number(x.toString().split('').reverse().join('')) === x
};

// console.log(isPalindrome(-121))

// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romNums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res = 0;

    for (let i = 0; i < s.length; i++) {

        let first = s[i];
        let second = s[i + 1];

        if (romNums[first] < romNums[second]) {
            res -= romNums[first]
        } else {
            res += romNums[first]
        }
    }

    return res
};

// console.log(romanToInt('MCMXCIV'))

// (() => {
//     console.log('1');
//
//     setTimeout(() => {
//         console.log('2')
//         Promise.resolve('3').then(console.log)
//     });
//
//     Promise.resolve('4').then(console.log)
//
//     Promise.resolve('5').then(item => setTimeout(() => console.log(item)))
//
//     console.log('6')
//
//     Promise.resolve('7').then(console.log)
//
//     setTimeout(() => {
//         Promise.resolve('8').then(console.log)
//         console.log('9')
//     }, 0)
//
//     console.log('10')
// }) ();

// 14.Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = ''
    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (letter !== strs[j][i]) {
                return str
            }
        }
        str += letter
    }
    return str
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack = [];

   for (let i = 0; i < s.length; i++) {
       let firstL = s[i]
       if (firstL === '(' || firstL === '{' || firstL === '[') {
           stack.push(firstL)
       } else {
           let lastB = stack.pop()
           if (lastB === '(' && firstL !== ')' ) return false
           if (lastB === '{' && firstL !== '}' ) return false
           if (lastB === '[' && firstL !== ']' ) return false
           if (lastB === undefined) return false
       }
   }
   return stack.length === 0
};

// console.log(isValid('{[]}'))

