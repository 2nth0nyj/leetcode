export function letterCombinations(digits: string): string[] {
	var m = new Map<string, Array<string>>([
		['2', ['a', 'b', 'c']],
		['3', ['d', 'e', 'f']],
		['4', ['g', 'h', 'i']],
		['5', ['j', 'k', 'l']],
		['6', ['m', 'n', 'o']],
		['7', ['p', 'q', 'r', 's']],
		['8', ['t', 'u', 'v']],
		['9', ['w', 'x', 'y', 'z']],
    ])
	var result :string[] = []
    for (let i = 0; i < digits.length; i++) {
        let d = digits[i]
        if (m.has(d)) {
            let letters = m.get(d)
            if( letters ) {
                if (i == 0) {
                    letters?.forEach( letter => {
                        result.push(letter)
                    })
                } else {
                    result = merge(result, letters)
                }
            }   
        }
    }
	return result
};

function merge(string1: string[], rune2: string[]): string[] {
	var s = new Array<string>()
    string1.forEach( str => {
        rune2.forEach( rune => {
            s.push( str + rune )
        })
    })
	return s
}