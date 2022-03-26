export const maxInt32 = Math.pow(2, 31) - 1
export const minInt32 = Math.pow(-2, 31)

export function maxPower(count: number): number {
    var j: number = 1
    for (var i = 1; i < count; i++) {
        j *= 10

        if (j >= maxInt32) {
            return maxInt32
        }
        if (j <= minInt32) {
            return minInt32
        }
    }
    return j
}


function nineNineGrid(): number[][] {
    return [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 4, 6, 8, 10, 12, 14, 16, 18],
        [3, 6, 9, 12, 15, 18, 21, 24, 27],
        [4, 8, 12, 16, 20, 24, 28, 32, 36],
        [5, 10, 15, 20, 25, 30, 35, 40, 45],
        [6, 12, 18, 24, 30, 36, 42, 48, 54],
        [7, 14, 21, 28, 35, 42, 49, 56, 63],
        [8, 16, 24, 32, 40, 48, 56, 64, 72],
        [9, 18, 27, 36, 45, 54, 63, 72, 81],
    ]
}

export function productResult(n1: number, n2: number): number {
    if (n1 === 0 || n2 === 0 ) {
        return 0
    }
    var r = nineNineGrid()
    return r[n1-1][n2-1]
}