function romanToInt(s: string): number {
    var a = 0
    for (let i = 0; i < s.length;) {
        if (s.charAt(i) == 'M') {
            a += 1000
            i++
        } else if ((s.charAt(i) == 'D')) {
            a += 500
            i++
        } else if ((s.charAt(i) == 'C' && i + 1 < s.length && s.charAt(i + 1) == 'D')) {
            a += 400
            i += 2
        } else if (s.charAt(i) == 'C' && i + 1 < s.length && s.charAt(i + 1) == 'M') {
            a += 900
            i += 2
        } else if (s.charAt(i) == 'C') {
            a += 100
            i++
        } else if (s.charAt(i) == 'L') {
            a += 50
            i++
        } else if (s.charAt(i) == 'X' && i + 1 < s.length && s.charAt(i + 1) == 'L') {
            a += 40
            i += 2
        } else if (s.charAt(i) == 'X' && i + 1 < s.length && s.charAt(i + 1) == 'C') {
            a += 90
            i += 2
        } else if (s.charAt(i) == 'X') {
            a += 10
            i++
        } else if (s.charAt(i) == 'V') {
            a += 5
            i++
        } else if (s.charAt(i) == 'I' && i + 1 < s.length && s.charAt(i + 1) == 'V') {
            a += 4
            i += 2
        } else if (s.charAt(i) == 'I' && i + 1 < s.length && s.charAt(i + 1) == 'X') {
            a += 9
            i += 2
        } else if (s.charAt(i) == 'I') {
            a += 1
            i++
        }

    }
    return a
};

