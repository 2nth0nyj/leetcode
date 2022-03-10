export function convert(s: string, numRows: number): string {
    let stringLength = s.length
    let stringResult = new Map<number, string>()

    let currentStringIndex = 0

    let extractMax = true
    let stepCounter = numRows

    for (let column = 0; currentStringIndex < stringLength; column++) {
        if (extractMax) {
            if (currentStringIndex + numRows <= stringLength) {
                stringResult.set(column, s.slice(currentStringIndex, currentStringIndex + numRows))
                currentStringIndex += numRows
            } else if (currentStringIndex < stringLength) {
                stringResult.set(column, s.slice(currentStringIndex, stringLength))
                break
            }
        } else {
            if (currentStringIndex < stringLength) {
                let tempString = generateString(numRows, s[currentStringIndex], stepCounter - 1)
                stringResult.set(column, tempString)
                currentStringIndex++
            }
        }
        stepCounter--
        if (stepCounter <= 1) {
            extractMax = true
            stepCounter = numRows
        } else {
            extractMax = false
        }
    }
    var finalString: string = "" 
    for (let r = 0; r < numRows; r++ ) {
        for (let j = 0; j < stringResult.size; j++) {
            let f = stringResult.get(j)
            if (f !== undefined && r < f.length && f.charAt(r) != '?')  {
                finalString += f.charAt(r)
            }
        }
    }
    return finalString
};

function generateString(count: number, character: string, characterIndex: number): string {
	let s = ""
	for (let i = 0; i < count; i++) {
		if (i == characterIndex) {
			s += character
		} else {
			s += "?"
		}
	}
	return s
}
