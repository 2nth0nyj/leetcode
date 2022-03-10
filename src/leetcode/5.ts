export function longestPalindrome(s: string): string {
    let stringLength = s.length
    let longestString: string = ""
    for (let i = 0; i < stringLength; i++) {
        var j = i - 1
        var k = i + 1
        while (j >= 0 && s.charAt(i) === s.charAt(j)) {
            let generatedNewString1 = s.slice(j, i + 1)
            if (generatedNewString1.length > longestString.length) {
                longestString = generatedNewString1
            }
            j--
        }

        while (j >= 0 && k < stringLength && s.charAt(j) === s.charAt(k)) {
            j--
            k++
        }
        let generatedNewString2 = s.slice(j + 1, k)
        if (generatedNewString2.length > longestString.length) {
            longestString = generatedNewString2
        }
    }
    return longestString
}
