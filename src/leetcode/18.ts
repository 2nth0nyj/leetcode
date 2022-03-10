export function fourSum(nums: number[], target: number): number[][] {
    var valueResult = new Set<string>()
    var arrayResult: number[][] = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            var t = target - nums[i] - nums[j]
            var k = j + 1
            var l = nums.length - 1
            while (k < l) {
                if (nums[k] + nums[l] > t) {
                    l--
                } else if (nums[k] + nums[l] < t) {
                    k++
                } else {
                    var a: [number, number, number, number] = [nums[i], nums[j], nums[k], nums[l]]
                    var as = JSON.stringify(a)
                    if (!valueResult.has(as)) {
                        valueResult.add(as)
                        arrayResult.push(a)
                    }
                    k++
                    l--
                }
            }
        }
    }
    return arrayResult
}