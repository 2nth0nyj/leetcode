export function lengthOfLongestSubstring(s: string): number {
    let stringLength = s.length

	let max = 0
	let m = new Map()
	let lastInnerIndex = 0

	for ( let outerIndex = 0; outerIndex < stringLength; outerIndex++) {
		for ( let innerIndex = lastInnerIndex; innerIndex < stringLength; innerIndex++) {
			let r = s[innerIndex]
			if (!m.has(r)) {
                m.set(r, true)
			} else {
				if (m.size > max) {
					max = m.size
				}
				lastInnerIndex = innerIndex
				let outerIndexElement = s[outerIndex]
                m.delete(outerIndexElement)
				break
			}
		}
		if (lastInnerIndex == stringLength-1) {
			if (m.size > max) {
				return m.size
			} else {
				return max
			}
		}
	}
	return max
};