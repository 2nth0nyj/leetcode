export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let array = new Array<number>()

    let len1 = nums1.length
    let len2 = nums2.length
    let i = 0 
    let j = 0
    while( i < len1 || j < len2) {
        if (i == len1) {
            array = array.concat(nums2.slice(j))
            break
        }
        if (j == len2) {
            array = array.concat(nums1.slice(i))
            break
        }

        if (nums1[i] < nums2[j]) {
            array.push(nums1[i])
            i++
        }
        else {
            array.push(nums2[j])
            j++
        }
    }
    let finalLength = array.length
    if (finalLength % 2 == 1) {
        i = Math.floor( finalLength / 2 )
        return array[i]
    }
    if (finalLength % 2 == 0) {
        i = Math.floor( finalLength / 2 )
        j = i - 1
        return (array[i] + array[j]) / 2
    }
    return 0

};