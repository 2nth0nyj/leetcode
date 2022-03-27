
export function isMatch(s: string, p: string): boolean {
    var resultMap = new Map<number, Map<number, number>>()
    return subMatch(s, p, 0, 0, resultMap)
};

function subMatch(s: string, p: string, i: number, j: number, m: Map<number, Map<number, number>>): boolean {
    var stringLength = s.length
    var patternLength = p.length
    var checkMapResult = checkMap(i, j, m)

    if (checkMapResult > 0) {
        return true
    }
    else if (checkMapResult < 0) {
        return false
    }
    if ((i >= stringLength) && (j >= patternLength)) {
        return true
    }
    if (j >= patternLength) {
        return false
    }
    var match = (i < stringLength && (s[i] == p[j] || p[j] == '.'))
    if (j + 1 < patternLength && p[j + 1] == '*') {
        var subResult = subMatch(s, p, i, j + 2, m) || (match && subMatch(s, p, i + 1, j, m))
        storeMap(i, j, m, subResult)
        return subResult
    }
    if (match) {
        var subResult = subMatch(s, p, i + 1, j + 1, m)
        storeMap(i, j, m, subResult)
        return subResult
    }
    return false
}

function checkMap(i: number, j: number, m: Map<number, Map<number, number>>): number {
    var n = m.get(i)?.get(j)
    if (n === undefined) {
        return 0
    }
    return n
}

function storeMap(i: number, j: number, m: Map<number, Map<number, number>>, result: boolean) {
    if (!m.get(i)?.get(j)) {
        m.set(i, new Map<number, number>())
    }
    if (result) {
        m.get(i)?.set(j, 1)
    }
    else {
        m.get(i)?.set(j, -1)
    }
}

