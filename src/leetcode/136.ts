function singleNumber(nums: number[]): number {
    var s = new Set<number>()
    nums.forEach((v) => {
        if (s.has(v)) {
            s.delete(v)
        } else {
            s.add(v)
        }
    })
    let setValues = s.values()
    let si = setValues.next()
    while (!si.done) {
        return si.value
    }
    return 0
}
