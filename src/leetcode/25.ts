/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./listNode"

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head == null || head.next == null) {
        return head
    }

    //make a dummy head
    let dummy = new ListNode(-1, head)
    let ok = checkNodesEnough(dummy, k)

    //update each dummy head with every reverse operation
    let updatedDummy: ListNode | null = dummy
    while (ok) {
        updatedDummy = reverseWithDummyHead(updatedDummy, k)
        ok = checkNodesEnough(updatedDummy, k)
    }
    return dummy.next
}

//check if have enough nodes to reverse
function checkNodesEnough(dummyHead: ListNode | null, k: number): boolean {
    if (dummyHead == null) {
        return false
    }
    let node = dummyHead.next
    var count: number = 0
    while (node !== null && count < k) {
        count++
        node = node.next
    }
    return count == k
}

//reverse nodes, and return new list tail as dummy head.
function reverseWithDummyHead(dummyHead: ListNode | null, k: number): ListNode | null {
    if (dummyHead) {
        let originalHead = dummyHead.next
        let node1 = dummyHead.next
        let prev = node1
        let cur: ListNode | null
        if (node1) {
            cur = node1.next
        } else {
            cur = null
        }
        for (let i = k; i > 1; i--) {
            if (cur) {
                let next = cur.next
                cur.next = prev
                prev = cur
                cur = next
            }
        }
        dummyHead.next = prev
        if (originalHead) {
            originalHead.next = cur
        }
        return originalHead
    }
    return null
}