function groupAnagrams(strs: string[]): string[][] {
    let m: Map<string, Array<string>> = new Map()

    strs.forEach((v) => {
        let s = [...v].sort((a: string, b: string) => a.localeCompare(b)).join('')
        let mArray = m.get(s)
        if (mArray === undefined) {
            mArray = new Array<string>()
            mArray.push(v)
            m.set(s, mArray)
        } else {
            mArray.push(v)
        }
    })

    let result = []
    let mapIter = m.values()
    let mapIterResult = mapIter.next()
    while (mapIterResult !== undefined && !mapIterResult.done) {
        let v = mapIterResult.value
        let oneResult = Array.from(v)
        result.push(oneResult)
        mapIterResult = mapIter.next()
    }

    return result

};
