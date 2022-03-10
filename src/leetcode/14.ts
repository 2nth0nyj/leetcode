export function longestCommonPrefix(strs: string[]): string {
    var s = ""
    for (let i = 0; i <= 200; i++) {
        var pivot = ""
        var match = strs.every((str, index) => {
            if (i < str.length) {
                if (index == 0) {
                    pivot = str.charAt(i)
                }

                if (index == strs.length - 1) {
                    if (str.charAt(i) == pivot) {
                        s += str.charAt(i)
                    }
                }
                if (str.charAt(i) !== pivot) {
                    return false
                }
                return true
            } else {
                return false
            }
        })
        if (!match) {
            return s
        }
    }
    return s
}