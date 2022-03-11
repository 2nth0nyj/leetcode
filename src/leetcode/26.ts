function removeDuplicates(nums: number[]): number {
    let length = nums.length
    let lengthCount: number = 0

    let i = 0
    let j = i + 1

    for (let slot = 0; slot < length; slot++) {
        for (; j < length && nums[i] == nums[j]; j++) {
        }
        if (i < length) {
            nums[slot] = nums[i]
            lengthCount++
            i = j
        }
    }
    return lengthCount
};