function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    var diff = Math.pow(2, 31) - 1
    var finalSum = 0
    for (let i = 0; i < nums.length - 2; i++) {
        var j = i + 1
        var k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            var thisDiff: number = 0
            if (sum > target) {
                thisDiff = sum - target
                k--
            } else if (sum < target) {
                thisDiff = target - sum
                j++
            } else if (sum == target) {
                return sum
            }
            if (thisDiff < 0) {
                thisDiff = -thisDiff
            }
            if (thisDiff < diff) {
                diff = thisDiff
                finalSum = sum
            }
        }
    }
    return finalSum
};