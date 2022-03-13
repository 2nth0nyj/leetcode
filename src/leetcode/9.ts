export function isPalindrome(x: number): boolean {
	if (x < 0) {
		return false
	}
	let a = toArray(x)

	var i = 0
	var j = a.length - 1
	while( i < j ) {
		if (a[i] !== a[j]) {
			return false
		}
		i++
		j--
	}
	return true
}

function toArray(x: number): Array<number> {
	var a = new Array<number>()
    while (x > 0) {
        a.push( x % 10)
        x = Math.trunc(x / 10)
    }
	return a
}