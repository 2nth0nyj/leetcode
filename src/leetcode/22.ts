function generateParenthesis(n: number): string[] {
    var r: string[] = ["()"]
    for (let i = 1; i < n; i++) {
        r = mergeOne(r)
    }
    return r
};

//for an existing string, find a place to insert left parenthese
//and just insert right parenthese to its right
function mergeOne(strings: string[]): string[] {
    var uniqueResult = new Set<string>()
    strings.forEach((s) => {
        for (let i = 0; i < s.length; i++) {
            var addLeft = s.slice(0, i) + "(" + s.slice(i)
            for (let j = i + 1; j < addLeft.length; j++) {
                var addRight = addLeft.slice(0, j) + ")" + addLeft.slice(j)
                uniqueResult.add(addRight)
            }
        }
    })
    return Array.from(uniqueResult)
}