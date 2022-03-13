
function removeElement(nums: number[], val: number): number {
    let i = 0
    let j = 0
    let count = 0
    while (j < nums.length) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
            j++
            count++
        } else {
            j++
        }
    }
    return count
}
