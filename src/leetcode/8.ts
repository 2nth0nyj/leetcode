import { maxInt32, maxPower, minInt32 } from "./utils"

export function myAtoi(s: string): number {
	var resultArray = new Array<number>()
	var sign  = 1
	var matching = false

	for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
		if (c == ' ') {
			if (matching) {
				break
			} else {
				continue
			}
		} else if (c == '+') {
			if ((!matching)) {
				matching = true
				continue
			} else {
				break
			}
		} else if (c == '-') {
			if (!matching) {
				matching = true
				sign = -1
				continue
			} else {
				break
			}
		} else if (c == '0') {
			if (resultArray.length != 0) {
				resultArray.push(0)
			}
			if (!matching) {
				matching = true
			}
		} else if (c == '1') {
			resultArray.push(1)
			if (!matching) {
				matching = true
			}
		} else if (c == '2') {
			resultArray.push(2)
			if (!matching) {
				matching = true
			}
		} else if (c == '3') {
			resultArray.push(3)
			if (!matching) {
				matching = true
			}
		} else if (c == '4') {
			resultArray.push(4)
			if (!matching) {
				matching = true
			}
		} else if (c == '5') {
			resultArray.push(5)
			if (!matching) {
				matching = true
			}
		} else if (c == '6') {
			resultArray.push(6)
			if (!matching) {
				matching = true
			}
		} else if (c == '7') {
			resultArray.push(7)
			if (!matching) {
				matching = true
			}
		} else if (c == '8') {
			resultArray.push(8)
			if (!matching) {
				matching = true
			}
		} else if (c == '9') {
			resultArray.push(9)
			if (!matching) {
				matching = true
			}
		} else {
			break
		}
	}
	let power = maxPower(resultArray.length)
	if (power >= maxInt32 || power <= minInt32) {
		if (sign == 1) {
			return maxInt32
		} else {
			return minInt32
		}
	}
	let result = 0
	for (let i = 0; i < resultArray.length; i++) {
		result += power * resultArray[i]
		if (result*sign >= maxInt32) {
			return maxInt32
		} else if (result*sign <= minInt32) {
			return minInt32
		}
		power = Math.trunc( power / 10 )
	}
    if (sign === -1) {
        result = -result
    }
	return result
};