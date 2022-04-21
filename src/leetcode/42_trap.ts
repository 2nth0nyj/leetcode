export function trap(height: number[]): number {
    var res = 0
    var maxLeft = 0
    var maxRight = 0
    var left = 1
    var right = height.length - 2
    while (left <= right) {
        maxLeft = Math.max(maxLeft, height[left - 1])
        maxRight = Math.max(maxRight, height[right + 1])
        if (maxLeft <= maxRight) {
            if (maxLeft > height[left]) {
                res += maxLeft - height[left]
            }
            left++
        }
        else {
            if (maxRight > height[right]) {
                res += maxRight - height[right]
            }
            right--
        }
    }
    return res
}