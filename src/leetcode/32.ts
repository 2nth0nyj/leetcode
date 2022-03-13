// brute force has O(n^2), not acceptable
// export function longestValidParentheses(s: string): number {
//     var max = 0
//     for (let i = 0; i < s.length;) {
//         var stack = new Array<string>()
//         var iAdvanced = false
//         for (let j = i; j < s.length; j++) {
//             if (s[j] === "(") {
//                 stack.push(s[j])
//             } else if (s[j] === ")" && stack.pop() === '(') {
//                 if (stack.length === 0) {
//                     var currentMax = j - i + 1
//                     max = Math.max(max, currentMax)
//                 }
//             } else {
//                 i = j + 1
//                 iAdvanced = true
//                 break
//             }
//         }
//         if (!iAdvanced) {
//             i++
//         }
//     }
//     return max
// }

// complexity O(n)
export function longestValidParentheses(s: string): number {
    var max = 0
    var left = 0
    var right = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            left++
        } else {
            right++
        }
        if (right > left) {
            left = 0
            right = 0
        } else if (left == right) {
            var thisMax = left + right
            max = Math.max(thisMax, max)
        }
    }
    left = 0
    right = 0
    for (let j = s.length - 1; j >= 0; j--) {
        if (s.charAt(j) == '(') {
            left++
        } else {
            right++
        }
        if (left > right) {
            left = 0
            right = 0
        } else if (left == right) {
            var thisMax = left + right
            max = Math.max(thisMax, max)
        }
    }
    return max
}