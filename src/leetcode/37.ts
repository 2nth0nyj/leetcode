type Cell = {
    row: number, column: number, current?: string, alternative?: string[]
}

export function solveSudoku(board: string[][]): void {
    let stack: Cell[] = []
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                stack.push({ row: i, column: j })
            }
        }
    }
    printBoard(board)
    var nextStack: number = 0
    do {
        nextStack = fillSudoku(stack, nextStack, board)
    } while (nextStack < stack.length)
    console.log( "after solved")
    printBoard(board)
};

function fillSudoku(stack: Array<Cell>, index: number, board: string[][]): number {
    var cell = stack[index] //this is current filling cell
    var row = cell.row
    var column = cell.column
    var fillingArray: string[] = []
    if (cell.alternative) {
        fillingArray = cell.alternative
    } else {
        fillingArray = cellAvailableNumbers(row, column, board)
    }
    var nextIndex: number = 0
    if (fillingArray.length == 0) {
        board[row][column] = "."
        delete cell.alternative
        delete cell.current
        nextIndex = index - 1
    } else {
        var c = fillingArray.shift() as string
        board[row][column] = c
        cell.current = c
        cell.alternative = fillingArray
        nextIndex = index + 1
    }
    return nextIndex
}

function cellAvailableNumbers(row: number, column: number, board: string[][]): string[] {
    let allSets = new Set<string>(new Array<string>("1", "2", "3", "4", "5", "6", "7", "8", "9"))
    board[row].forEach((v) => {
        if (v !== ".") {
            allSets.delete(v)
        }
    })
    board.forEach((row) => {
        let v = row[column]
        if (v !== ".") {
            allSets.delete(row[column])
        }
    })
    var gridIndexes = rowColumnToGrid(row, column)
    gridIndexes[0].forEach((gridRow) => {
        gridIndexes[1].forEach((gridColumn) => {
            allSets.delete(board[gridRow][gridColumn])
        })
    })
    return Array.from(allSets)
}

function rowColumnToGrid(row: number, column: number): Array<Array<number>> {
    var rowStart = Math.floor(row / 3) * 3
    var columnStart = Math.floor(column / 3) * 3

    var result = new Array<Array<number>>([], [])
    for (let i = 0; i < 3; i++) {
        var addRow = rowStart + i
        result[0].push(addRow)
    }
    for (let j = 0; j < 3; j++) {
        var addColumn = columnStart + j
        result[1].push(addColumn)
    }
    return result
}


function printBoard(board: string[][]) {
    board.forEach((row) => {
        console.log(row.join(","))
    })
}

function rowCheck(row: number, board: string[][]): boolean {
    var s = new Set<string>()
    let rowOk = board[row].every((v) => {
        if (v == ".") {
            return true
        }
        if (s.has(v)) {
            return false
        }
        s.add(v)
        return true
    })
    return rowOk
}

function columnCheck(column: number, board: string[][]) {
    var s = new Set<string>()
    let columnOk = board.every((row) => {
        let c = row[column]
        if (c == ".") {
            return true
        }
        if (s.has(c)) {
            return false
        }
        s.add(c)
        return true
    })
    return columnOk
}