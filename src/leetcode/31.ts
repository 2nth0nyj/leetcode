/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]): void {
    var index1 = -1
    var value1: number | undefined = undefined
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index1 = i - 1
            value1 = nums[i-1]
            break
        }
    }
    if (index1 === -1 ) {
        nums.reverse()
        return
    }
    var index2 = -1
    var value2: number | undefined = undefined
    for (let j = nums.length - 1; j > index1; j--) {
        if( value1 !== undefined && nums[j] > value1 ) {
            value2 = nums[j]
            index2 = j
            break
        }
    }
    //do swap and reverse
    if (value2 !== undefined && value1 !== undefined) {
        nums[index1] = value2
        nums[index2] = value1
        //reverse the rest
        var l = index1 + 1
        var k = nums.length - 1
        while( l < k) {
            let t = nums[l]
            nums[l] = nums[k]
            nums[k] = t
            l++
            k-- 
        }
    }
};
