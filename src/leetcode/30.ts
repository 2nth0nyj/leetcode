export function findSubstring(s: string, words: string[]): number[] {
    let wordsCountMap = new Map<string, number>()
    let wordsLength: number = 0
    let piece: number = 0
    let result: number[] = []
    words.forEach((v) => {
        wordsLength += v.length
        let oldV = wordsCountMap.get(v)
        if (!oldV) {
            oldV = 0
        }
        oldV++
        wordsCountMap.set(v, oldV)
        piece = v.length
    })
    for (let sIndex = 0; sIndex <= s.length - wordsLength; sIndex++) {
        let sub = s.substring(sIndex, sIndex + wordsLength)
        let subMap = new Map<string, number>()
        var thisIndexOK = true
        for (let subIndex = 0; subIndex < sub.length; subIndex += piece) {
            let pieceString = sub.substring(subIndex, subIndex + piece)
            if (!wordsCountMap.has(pieceString)) {
                thisIndexOK = false
                break
            }
            var subValue = subMap.get(pieceString)
            if (!subValue) {
                subValue = 0
            }
            subMap.set(pieceString, subValue + 1)
        }
        //compare subMap to wordsMap
        if (thisIndexOK) {
            for (let [k, v] of wordsCountMap) {
                if (subMap.get(k) !== v) {
                    thisIndexOK = false
                    break
                }
            }
        }
        if (thisIndexOK) {
            result.push(sIndex)
        }
    }
    return result
}