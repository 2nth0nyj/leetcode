export function searchInsert(nums: number[], target: number): number {
    var start = 0
    var end = nums.length - 1

    while (start <= end) {
        var middle = Math.floor((start + end) / 2)
        if (target == nums[middle]) {
            return middle
        } else if (target > nums[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return start
}