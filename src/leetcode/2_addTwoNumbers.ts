import { ListNode } from "./listNode";


export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let startNode: ListNode | null = null
    let lastNode: ListNode | null = null

    let i1 = l1
    let i2 = l2
    let addOne = 0
    let l1Length = 0
    let l2Length = 0

    let ok = true
    while (ok) {
        let v1 = 0
        let v2 = 0
        if (i1 !== null) {
            v1 = i1.val
            l1Length++
        }
        if (i2 !== null) {
            v2 = i2.val
            l2Length++
        }
        let sum = v1 + v2
        let newNode: ListNode
        if (sum >= 10) {
            let nextValue = sum - 10 + addOne
            if (nextValue >= 10) {
                nextValue -= 10
            }
            newNode = new ListNode(nextValue, null)
            addOne = 1
        } else {
            let nextValue = sum + addOne
            if (nextValue >= 10) {
                nextValue -= 10
                addOne = 1
            } else {
                addOne = 0
            }
            newNode = new ListNode(nextValue, null)
        }
        if (startNode === null) {
            startNode = newNode
            lastNode = newNode
        } else {
            if (lastNode !== null) {
                lastNode.next = newNode
                lastNode = newNode
            }
        }

        let reservei1 = i1
        if (i1 !== null) {
            i1 = i1.next
        }
        let reservei2 = i2
        if (i2 !== null) {
            i2 = i2.next
        }

        ok = !((i1 === null) && (i2 === null))
        if (!ok && addOne == 1) {
            ok = true
            if (l1Length > l2Length) {
                if (reservei1 !== null) {
                    reservei1.next = new ListNode(1)
                }
            } else {
                if (reservei2 !== null) {
                    reservei2.next = new ListNode(1)
                }
            }
        }
    }
    return startNode
}