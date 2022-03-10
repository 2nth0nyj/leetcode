export function threeSum(nums: number[]): number[][] {
    var valueResult = new Set<string>()
    var arrayResult: number[][] = []
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let t: [number, number, number] = [
                nums[i],
                nums[j],
                nums[k],
            ]
            let ts = JSON.stringify(t)
            if (nums[j] + nums[k] > -nums[i]) {
                k--
            } else if (nums[j] + nums[k] < -nums[i]) {
                j++
            } else {
                if (!valueResult.has(ts)) {
                    valueResult.add(ts)
                    arrayResult.push([nums[i], nums[j], nums[k]])
                }
                j++
                k--
            }
        }
    }
    return arrayResult
};