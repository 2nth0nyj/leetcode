export function maxArea(height: number[]): number {
    var i = 0
    var j = height.length - 1
    var maxArea: number = 0
    while (i < j) {
        var h = height.at(i)
        if (h !== undefined && height[j] < h) {
            h = height[j]
        }
        var w = j - i
        if (h !== undefined && w * h > maxArea) {
            maxArea = w * h
        }
        let heighti = height.at(i)
        let heightj = height.at(j)
        if (heighti !== undefined && heightj !== undefined && heighti < heightj) {
            i++
        } else {
            j--
        }
    }
    return maxArea
};