//dynamic programming

// match[i][j] = match[i-1][j-1] if s[i] == p[j] || p[j] == '?'
// match[i][j] = match[i-1][j] || match[i][j-1] || match[i][j] if p[j] == '*'


export function isMatch(s: string, p: string): boolean {
    var dp: Array< Array<boolean> > = []
    dp = '0'.repeat(s.length + 1).split('').map( () => {
        return '0'.repeat(p.length + 1).split('').map(() => false)
    })
    dp[0][0] = true
    for (let i = 0 ; i < p.length; i++) {
        if (p.at(i) != "*") {
            break
        }
        dp[0][i+1] = true
    }
    console.log( "dp = ", dp)
    for( let i = 0; i < s.length; i++ ) {
        for (let j = 0; j < p.length; j++) {
            if( s[i] == p[j] || p[j] == '?') {
                dp[i+1][j+1] = dp[i][j]
            } else if (p[j] == '*') {
                dp[i+1][j+1] = dp[i+1][j] || dp[i][j] || dp[i][j+1]
            }
        }
    }
    console.log( "finalDp = ", dp)
    return dp[s.length][p.length]
}

