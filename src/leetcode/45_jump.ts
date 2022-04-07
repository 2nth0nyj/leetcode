export function jump(nums: number[]): number {
    let left = 0
    let right = 0
    let steps = 0
    while(right < nums.length - 1) {
        let nextLeft = right + 1
        let nextRight = nextLeft
        for( let index = left; index <= right; index++) {
            if( index + nums[index] > nextRight) {
                nextRight = index + nums[index]
            }
        }
        left = nextLeft
        right = nextRight
        steps++
    }
    return steps
}
