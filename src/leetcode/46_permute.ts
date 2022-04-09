export function permute(nums: number[]): number[][] {
    let a: Array<Array<number>> = []
    nums.forEach((_, i) => {
        a.push([i])
    })
    let result: number[][] = []
    while (a.length > 0) {
        let oneGroup = a.shift() as Array<number>
        if (oneGroup.length == nums.length) {
            result.push(oneGroup)
        } else {
            let s = new Set<number>(oneGroup)
            nums.forEach((_, i) => {
                if (!s.has(i)) {
                    let cloneGroup = Array.from(oneGroup)
                    cloneGroup.push(i)
                    a.push(cloneGroup)
                }
            })
        }
    }
    return result.map((v) => v.map(i => nums[i]))
}