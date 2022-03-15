export function isValidSudoku(board: string[][]): boolean {
    board.forEach((row) => {
        row.forEach((element,i) => {
            process.stdout.write(element)
            if( i !== row.length -1 ) {
                process.stdout.write(",")
            }
        })
        process.stdout.write("\n")
    })

    let columnUnique = new Map<number, Set<string>>()
    let gridUnique = new Map<string, Set<string> >()
    let allResult = board.every((row, rowIndex) => {
        var s = new Set<string>()
        var elementResult = row.every((element, columnIndex) => {
            if( element === ".") {
                return true
            }
            if (s.has(element)) {
                return false
            }


            if (columnUnique.get(columnIndex)?.has(element)) {
                return false
            }

            let rowGridGroupIndex = Math.floor(rowIndex / 3)
            let columnGridGroupIndex = Math.floor(columnIndex / 3)
            let gridKey = rowGridGroupIndex.toString() + columnGridGroupIndex.toString()
            if (gridUnique.get(gridKey)?.has(element)) {
                return false
            }

            s.add(element)

            if(!columnUnique.get(columnIndex)) {
                columnUnique.set(columnIndex, new Set<string>() )
            }

            columnUnique.get(columnIndex)?.add(element)
            if(!gridUnique.get(gridKey)) {
                gridUnique.set(gridKey, new Set<string>())
            }
            gridUnique.get(gridKey)?.add(element)
            return true
        })
        return elementResult
    })
    return allResult
}