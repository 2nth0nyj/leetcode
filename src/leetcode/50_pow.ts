export function myPow(x: number, n: number): number {
    let positive = true
    if ( n < 0) {
        positive = false
        n = -n
    }
    let r = p(x, n)
    if( !positive ) {
        return 1/r
    }
    return r
};

function p(x: number, n: number): number {
    if( x == 0 ) {
        return 0
    }
    if( n == 0) {
        return 1 
    }
    if ( n % 2 == 1) {
        let t = p(x, Math.floor(n / 2))
        return x * t * t
    }
    let t = p(x, Math.floor(n / 2))
    return t * t
}