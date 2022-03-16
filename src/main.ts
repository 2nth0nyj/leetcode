// import { ListNode } from './leetcode/listNode'

// import { twoSum } from './leetcode/1'
// import { addTwoNumbers } from './leetcode/2'
// import { lengthOfLongestSubstring } from './leetcode/3'
// import { longestPalindrome } from './leetcode/5'
// import { convert } from './leetcode/6'
// import { reverse } from './leetcode/7'
// import { isMatch } from './leetcode/10'
// import { longestCommonPrefix } from './leetcode/14'
// import { threeSum } from './leetcode/15'
// import { letterCombinations } from './leetcode/17'
// import { fourSum } from './leetcode/18'
// import { isValid } from './leetcode/20'
// import { mergeKLists } from './leetcode/23'
// import { strStr } from './leetcode/28'
// import { divide } from './leetcode/29'
// import { findSubstring } from './leetcode/30'
// import { nextPermutation } from './leetcode/31'
// import { longestValidParentheses } from './leetcode/32'
// import { search } from './leetcode/33'
// import { searchRange } from './leetcode/34'
// import { searchInsert } from './leetcode/35'
// import { isValidSudoku } from './leetcode/36'
import { solveSudoku } from './leetcode/37'
import { countAndSay } from './leetcode/38'



// let result1 = twoSum([1, 2, 3, 4, 45], 7)
// console.log("result 1= ", result1)


// let result2 = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))
// // console.log( "result 2= ", result2)

// let result3 = lengthOfLongestSubstring("abcabcbb")
// console.log("result 3= ", result3)


// let result5 = longestPalindrome("cbbd")
// console.log("result5 = ", result5)

// let result6 = convert("PAYPALISHIRING", 4)
// console.log("result6 = ", result6)


// let result7 = reverse(123)
// console.log("result7 = ", result7)

// let result10 = isMatch("aa", "a*")
// console.log("result10 = ", result10)

// let result14 = longestCommonPrefix(["flower", "flow", "flight"])
// console.log("result14 = ", result14)


// let result15 = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])
// console.log("result15 = ", result15)

// let result16 = letterCombinations("2343")
// console.log("result16 = ", result16)

// let result18 = fourSum([2, 2, 2, 2, 2], 8)
// console.log("result18 = ", result18)

// let result20 = isValid("()[]{}")
// console.log("result20 = ", result20)

// var listNodes = [
//     new ListNode(1, new ListNode(4, new ListNode(5))),
//     new ListNode(1, new ListNode(3, new ListNode(4))),
//     new ListNode(2, new ListNode(6)),
// ]
// let result22 = mergeKLists(listNodes)
// console.log("result22 = ", result22)


// let result28 = strStr("aaaaa", "bba")
// console.log("result28 = ", result28)

// let result29 = divide(-2147483648, -1)
// console.log("result29 = ", result29)

// // let result30 = findSubstring("bcabbcaabbccacacbabccacaababcbb",["c","b","a","c","a","a","a","b","c"])
// let result30 = findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
// console.log("result30 = ", result30)

// var nums = [4, 5, 3, 2, 1]
// nextPermutation(nums)
// console.log("nums = ", nums)


// // var result32 = longestValidParentheses("(()")
// var result32 = longestValidParentheses("(()")
// console.log("result32 = ", result32)

// var result33 = search([4, 5, 6, 7, 0, 1, 2], 0)
// console.log("result33 = ", result33)

// var result34 = searchRange([5, 7, 7, 8, 8, 10], 8)
// console.log("result34 = ", result34)

// var result35 = searchInsert([1, 3, 5, 6], 7)
// console.log("result35 = ", result35)

// var result36 = isValidSudoku([[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]])
// console.log( "result36 = ", result36)
// solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])

let result38 = countAndSay(4)
console.log( "result38 = ", result38)