// Search in Rotated Sorted Array 
// must complete in O(log n)

export function search(nums: number[], target: number): number {
    var start = 0
    var end = nums.length - 1
    var pivotIndex = -1

    //first find the pivot, O(logN)
    while (start < end) {
        var middle = Math.floor((start + end) / 2)
        if (nums[middle] < nums[end]) {
            end = middle
        } else {
            start = middle + 1
        }
    }
    pivotIndex = start

    //do binary search in two array, [0, pivotIndex], [pivotIndex, length)
    if (nums[0] <= target && target <= nums[pivotIndex - 1]) {
        start = 0
        end = pivotIndex - 1
    } else {
        start = pivotIndex
        end = nums.length - 1
    }
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
    return -1
}