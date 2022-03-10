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

