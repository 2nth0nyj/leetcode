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

import { ListNode } from "./listNode";

function swapPairs(head: ListNode | null): ListNode | null {
    var h: ListNode | null = null
    var p = head
    var headChanged = false
    if (p == null || p.next == null) {
        return head
    }

    while (p !== null && p.next !== null) {
        if (!headChanged) {
            var lastNodeNext: ListNode | null = p.next.next
            p.next.next = p
            h = p.next
            p.next = lastNodeNext
            headChanged = true
        } else {
            if (p.next == null || p.next.next == null) {
                return h
            }
            var node2LinkToNext: ListNode | null = p.next.next.next
            var node2: ListNode | null = p.next.next
            var node1: ListNode | null = p.next
            node2.next = node1
            node1.next = node2LinkToNext
            p.next = node2
            p = node1
        }
    }
    return h
};