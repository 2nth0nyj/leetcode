export function searchRange(nums: number[], target: number): number[] {
    var start = 0
    var end = nums.length - 1
    var pivotIndex1 = -1
    var pivotIndex2 = -1

    while (start <= end) {
        var middle = Math.floor((start + end) / 2)
        if (target == nums[middle]) {
            pivotIndex1 = middle - 1
            pivotIndex2 = middle + 1
            while (pivotIndex1 >= 0 && nums[pivotIndex1] === target) {
                pivotIndex1--
            }
            while (pivotIndex2 < nums.length && nums[pivotIndex2] === target) {
                pivotIndex2++
            }
            pivotIndex1++
            pivotIndex2--
            return [pivotIndex1, pivotIndex2]
        } else if (target > nums[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }

    return [pivotIndex1, pivotIndex2]
};