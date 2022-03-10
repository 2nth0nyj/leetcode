import { maxInt32, maxPower, minInt32 } from "./utils"
export function reverse(x: number): number {
    let a = new Array()
    let sign = 1
    if (x < 0) {
        x = -x
        sign = -1
    }
    while (x > 0) {
        let t = x % 10
        a.push(t)
        x = Math.trunc(x / 10)
    }
    let power = maxPower(a.length)

    if ((power >= maxInt32) || (power <= minInt32)) {
        if (sign == 1) {
            return maxInt32
        } else {
            return minInt32
        }
    }
    let result = 0
    for (let i = 0; i < a.length; i++) {
        result += power * a[i]
        power = Math.trunc(power / 10)
        if ((result * sign >= maxInt32) || result * sign <= minInt32) {
            return 0
        }
    }
    if (sign === -1) {
        result = -result
    }

    return result
};