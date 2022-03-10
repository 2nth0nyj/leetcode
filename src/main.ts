import { ListNode } from './leetcode/listNode'

import { twoSum } from './leetcode/1'
import { addTwoNumbers } from './leetcode/2'
import { lengthOfLongestSubstring } from './leetcode/3'
import { longestPalindrome } from './leetcode/5'
import { convert } from './leetcode/6'
import { reverse } from './leetcode/7'
import { isMatch } from './leetcode/10'
import { longestCommonPrefix } from './leetcode/14'
import { threeSum } from './leetcode/15'



let result1 = twoSum([1, 2, 3, 4, 45], 7)
console.log("result 1= ", result1)


let result2 = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))
// console.log( "result 2= ", result2)

let result3 = lengthOfLongestSubstring("abcabcbb")
console.log("result 3= ", result3)


let result5 = longestPalindrome("cbbd")
console.log("result5 = ", result5)

let result6 = convert("PAYPALISHIRING", 4)
console.log("result6 = ", result6)


let result7 = reverse(123)
console.log("result7 = ", result7)

let result10 = isMatch("aa", "a*")
console.log("result10 = ", result10)

let result14 = longestCommonPrefix(["flower", "flow", "flight"])
console.log("result14 = ", result14)


let result15 = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])
console.log( "result15 = ", result15)