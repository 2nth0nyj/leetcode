export function divide(dividend: number, divisor: number): number {
    var positive = false
    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
        positive = true
    }

    //prepare before loop
    var quotient = 0
    var abosoluteDividend = dividend
    if (abosoluteDividend < 0) {
        abosoluteDividend = -abosoluteDividend
    }
    var absoluteDivisor = divisor
    if (absoluteDivisor < 0) {
        absoluteDivisor = -absoluteDivisor
    }

    while (abosoluteDividend >= absoluteDivisor) {
        var shift: number = 0
        var overflowed = false

        var absoluteShiftDivisor = absoluteDivisor << shift
        while (abosoluteDividend >= absoluteShiftDivisor) {
            shift++
            absoluteShiftDivisor = absoluteDivisor << shift
            if (absoluteShiftDivisor < 0) {
                overflowed = true
                absoluteShiftDivisor = Math.pow(2, shift)
            }
            if (overflowed) {
                absoluteShiftDivisor = Math.pow(2, shift)
            }
        }
        if (shift > 0) {
            quotient += (1 << (shift - 1))
            abosoluteDividend -= absoluteDivisor << (shift - 1)
        }
    }

    if (!positive) {
        return -quotient
    }

    if (quotient >= (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1
    }
    if (quotient <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    }

    return quotient
};