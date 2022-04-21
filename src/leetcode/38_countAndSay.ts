export function countAndSay(n: number): string {
    if (n == 1) { 
        return "1"
    }
    return digitsToString(countAndSay(n - 1))
};

function digitsToString(digits: string): string {
    var currentDigit: string | undefined = undefined
    var digitStartIndex: number = 0
    var result = ""
    for (let i = 0; i <= digits.length; i++) {
        var c = digits.charAt(i)
        if (currentDigit === undefined) {
            currentDigit = c
            digitStartIndex = i
        }
        if (currentDigit !== c) { // a new digit start, calculate the length, and + the digit, and assign the new digit
            var l = i - digitStartIndex
            result += l.toString() + currentDigit.toString()
            digitStartIndex = i
            currentDigit = c
        }
    }
    return result
}