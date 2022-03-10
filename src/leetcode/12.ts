function intToRoman(num: number): string {
    var s = ""
    var n = num
    var d = 0
    if (n >= 1000) {
        d = Math.floor(n / 1000)
        for (let i = 1; i <= d; i++) {
            s += "M"
        }
        n -= d * 1000
    }
    if (n >= 100) {
        d = Math.floor(n / 100)
        if (d <= 3) {
            for (let i = 1; i <= d; i++) {
                s += "C"
            }
        } else if (d == 4) {
            s += "CD"
        } else if (5 <= d && d <= 8) {
            s += "D"
            for (let i = 5; i < d; i++) {
                s += "C"
            }
        } else {
            s += "CM"
        }
        n -= d * 100
    }
    if (n >= 10) {
        d = Math.floor(n / 10)
        if (d <= 3) {
            for (let i = 1; i <= d; i++) {
                s += "X"
            }
        } else if (d == 4) {
            s += "XL"
        } else if (5 <= d && d <= 8) {
            s += "L"
            for (let i = 5; i < d; i++) {
                s += "X"
            }
        } else {
            s += "XC"
        }
        n -= d * 10
    }
    if (n > 0) {
        d = n
        if (d <= 3) {
            for (let i = 1; i <= d; i++) {
                s += "I"
            }
        } else if (d == 4) {
            s += "IV"
        } else if (5 <= d && d <= 8) {
            s += "V"
            for (let i = 5; i < d; i++) {
                s += "I"
            }
        } else {
            s += "IX"
        }
    }

    return s
};

