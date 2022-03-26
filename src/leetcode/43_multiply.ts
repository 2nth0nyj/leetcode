import { productResult } from "./utils"

export function multiply(num1: string, num2: string): string {
    var s = "0".repeat(num1.length + num2.length)
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let digit1 = parseInt(num1.at(i) as string)
            let digit2 = parseInt(num2.at(j) as string)
            let product = productResult(digit1, digit2)
            let finalProduct = product.toString() + "0".repeat(num1.length - 1 - i + num2.length - 1 - j)
            s = sum(s, finalProduct)
        }
    }
    while (s.startsWith('0') && s.length > 1) {
        s = s.slice(1,)
    }
    return s
}

function sum(num1: string, num2: string): string {
    let returnSum = num1
    let nextAdd1 = false
    let index = num1.length - 1
    num2 = num2.padStart(num1.length, '0')
    while (index >= 0) {
        let digit1 = parseInt(num1.at(index) as string)
        let digit2 = parseInt(num2.at(index) as string)
        if (!(digit1 === 0 && digit2 === 0 && !nextAdd1)) {
            let s = digit1 + digit2
            if (nextAdd1) {
                s += 1
            }
            if (s >= 10) {
                nextAdd1 = true
            } else {
                nextAdd1 = false
            }
            let thisSumString = s.toString()
            let thisDigit = thisSumString.toString().at(thisSumString.length - 1)
            returnSum = returnSum.substring(0, index) + thisDigit + returnSum.substring(index + 1)
        }
        index--
    }
    return returnSum
}