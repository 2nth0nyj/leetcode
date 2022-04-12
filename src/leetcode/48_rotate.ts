export function rotate(matrix: number[][]): void {
    let left: number = 0
    let right: number = matrix.length - 1
    while (left < right) {
        subRotate(left, right, matrix)
        left++
        right--
    }
};

function subRotate(left: number, right: number, matrix: number[][]) {
    let size = right - left
    for(let i = 0; i < size; i++) {
        let n1 = matrix[left][left+i]
        matrix[left][left+i] =  matrix[right-i][left] //n4 -> n1
        matrix[right-i][left] = matrix[right][right-i] //n3 -> n4
        matrix[right][right-i] = matrix[left+i][right]//n2 -> n3
        matrix[left+i][right] = n1// n1 -> n2
    }
}

