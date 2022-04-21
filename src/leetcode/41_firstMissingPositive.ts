export function firstMissingPositive(nums: number[]): number {
    let result = 1
    let tempMap = new Set<number>()
    nums.forEach((v) => {
        if (v > result) {
            tempMap.add(v)
        } else if(v == result) {
            result++
            while(tempMap.has(result)) {
                result++
            }
        }
    })
    return result
};