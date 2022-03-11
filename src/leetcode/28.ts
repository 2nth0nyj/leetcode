export function strStr(haystack: string, needle: string): number {
    if (needle == "") {
        return 0
    }
    let needleLength = needle.length
    let haystackLength = haystack.length
    let lps = lpsArray(needle)

    let heystackIndex = 0
    let patternIndex = 0
    while (heystackIndex < haystackLength) {
        if (needle[patternIndex] == haystack[heystackIndex]) {
            heystackIndex++
            patternIndex++
        }
        if (patternIndex == needleLength) {
            return heystackIndex - needleLength
        } else if (heystackIndex < haystackLength && needle[patternIndex] != haystack[heystackIndex]) {
            if (patternIndex != 0) {
                patternIndex = lps[patternIndex - 1]
            } else {
                heystackIndex++
            }
        }
    }
    return -1
}

function lpsArray(s: string): number[] {
    let lps = new Array<number>()
    for(let arrayIndex = 0; arrayIndex < s.length; arrayIndex++) {
        lps[arrayIndex] = 0
    }
    
    let l = 0
    let i = 1
    while (i < s.length) {
        if (s[i] == s[l]) {
            l++
            lps[i] = l
            i++
        } else {
            if (l != 0) {
                l = lps[l - 1]
            } else {
                lps[i] = 0
                i++
            }
        }
    }
    return lps
}