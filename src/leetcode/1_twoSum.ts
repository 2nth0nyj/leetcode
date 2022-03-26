export function twoSum(nums: number[], target: number): number[] {
    let index1 = 0;
    let index2 = 1;
    let found = false;
    nums.forEach((v1,i1) => {
        if( !found ) {
        nums.forEach((v2,i2) => {
            if ((i1 < i2) && (v1+v2 == target)) {
                index1 = i1;
                index2 = i2;
                found = true;
        }
        })
        }
    })
    return [index1, index2]
};