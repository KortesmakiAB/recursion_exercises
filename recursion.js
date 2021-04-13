/** product: calculate the product of an array of numbers. */

// NB: counter (i = 0) used instead of .slice() to reduce runtime from O(n^2) to O(n).

function product(nums, i = 0) {
  //  base case
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  //  base case
  if (i === words.length) return 0;
  
  return words[i].length > longest(words, i + 1) ? words[i].length : longest(words, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, outString = '', i = 0) {
  //  base case
  if (i >= str.length) return outString;

  outString += str[i]; 

  return everyOther(str, outString, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - 1) {
  const midpoint = Math.floor(str.length / 2);

  // base case
  if (left >= midpoint && right <= midpoint) return true;

  if (str[left] !== str[right]) return false;
  else return isPalindrome(str, left + 1, right - 1);
}

// I was dancing around the above solution for quite a while.
// Once I wrote out an iterative solution, I started figuring out the recursive solution.

// traditional solution
// function isPalindrome(str) {
//   const midpoint = Math.floor(str.length / 2);
  
//   let left = 0
//   let right = str.length - 1

  
//   while (left <= midpoint && right >= midpoint){
//     if (str[left] !== str[right]) return false;

//     left++
//     right--
//   }
  
//   return true
// }

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // base case
  if (i === arr.length) return - 1;

  if (arr[i] === val) return i;
  else return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  // base case
  if (i < 0) return '';

  return str[i] += revString(str, i - 1);
}

// function revString(str, returnStr = '') {
//   for (let i = str.length - 1; i >= 0; i--) returnStr += str[i];

//   return returnStr;
// }

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, returnArr = []) {
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'string') returnArr.push(obj[key]);
    else if (typeof obj[key] === 'object') gatherStrings(obj[key], returnArr);
  }

  return returnArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {

  function getMidIdx(){
    return Math.floor((rightIdx + leftIdx) / 2);
  }
  let midIdx = getMidIdx();

  // base case
  if (leftIdx > rightIdx) return -1;

  if (arr[midIdx] === val) return midIdx;
  else if (arr[midIdx > val]) {
    rightIdx = midIdx - 1;
    midIdx = getMidIdx();
    return binarySearch(arr, val, leftIdx, rightIdx);
  }
  else {
    leftIdx = midIdx + 1;
    midIdx = getMidIdx();
    return binarySearch(arr, val, leftIdx, rightIdx);
  }
}

// function binarySearch(arr, val) {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;

//   function getMidIdx(){
//     return Math.floor((rightIdx + leftIdx) / 2);
//   }
//   let midIdx = getMidIdx();

//   while (leftIdx <= rightIdx){
//     if (arr[midIdx] === val) return midIdx;
//     else if (arr[midIdx] > val){
//       rightIdx = midIdx - 1;
//       midIdx = getMidIdx();
//     }
//     else {
//       leftIdx = midIdx + 1;
//       midIdx = getMidIdx();
//     }
//   }

//   return -1;
// }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
