export function permuteUnique(nums: number[]): number[][] {
    let a: Array<Array<number>> = new Array()
    {
        let addedNumber: Set<number> = new Set<number>()
        nums.forEach((v, i) => {
            if (!addedNumber.has(v)) {
                a.push([i])
                addedNumber.add(v)
            }
        })
    }
    while (a.length > 0) {
        let nextItereate: Array<Array<number>> = new Array()
        a.forEach((eachNode) => {
            let usedNumber: Set<number> = new Set<number>()
            if (eachNode.length !== nums.length) {
                let nodeIndexSet: Set<number> = new Set(eachNode)
                nums.forEach((v, i) => {
                    if (!(usedNumber.has(v) || nodeIndexSet.has(i))) {
                        let cloneNode = Array.from(eachNode)
                        cloneNode.push(i)
                        usedNumber.add(v)
                        nextItereate.push(cloneNode)
                    }
                })
            }
        })
        if (nextItereate.length > 0) {
            a = nextItereate
        } else {
            break
        }
    }
    return a.map((v) => v.map(i => nums[i]))
}