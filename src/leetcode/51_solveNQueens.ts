type solution = {
    positions: Map<number, number>,
    nextRow: number,
    positiveDiagonal: Set<number>,
    negativeDiagonal: Set<number>,
    columns: Set<number>,
}

function groupToString(g: solution): Array<string> {
    let result: Array<string> = []
    for (let i = 0; i < g.nextRow; i++) {
        let s = ".".repeat(g.nextRow).split("")
        let q = g.positions.get(i) as number
        s[q] = 'Q'
        result.push(s.join(''))
    }
    return result
}

function solveNQueens(n: number): string[][] {
    let processingGroups: Array<solution> = []
    let resultGroups: Array<solution> = []
    for (let i = 0; i < n; i++) {
        let oneGroup: solution = {
            positions: new Map<number, number>([[0, i]]),
            nextRow: 1,
            positiveDiagonal: new Set([0 - i]),
            negativeDiagonal: new Set([0 + i]),
            columns: new Set([i]),
        }
        processingGroups.push(oneGroup)
    }
    while (processingGroups.length > 0) {
        let g = processingGroups.shift() as solution
        if (g.nextRow == n) {
            resultGroups.push(g)
        } else {
            for (let column = 0; column < n; column++) {
                let row = g.nextRow
                if (!(g.columns.has(column) ||
                    g.positiveDiagonal.has(row - column) ||
                    g.negativeDiagonal.has(row + column)
                )) {
                    let cloneGroup: solution = {
                        positions: new Map<number, number>(g.positions).set(row, column),
                        nextRow: row + 1,
                        positiveDiagonal: new Set(g.positiveDiagonal).add(row - column),
                        negativeDiagonal: new Set(g.negativeDiagonal).add(row + column),
                        columns: new Set(g.columns).add(column)
                    }
                    processingGroups.push(cloneGroup)
                }
            }
        }
    }
    return resultGroups.map(v => groupToString(v))
}