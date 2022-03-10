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

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    var r: ListNode | null = null
    var rIterator: ListNode | null = null

    var l = lists.filter((v) => v != null)

    while (l.length > 0) {
        var min = Math.pow(2, 31) - 1
        var index: number = -1
        var thisMinNode: ListNode | null = null

        l.forEach((node, i) => {
            if (node !== null && node.val < min) {
                min = node.val
                index = i
                thisMinNode = node
            }
        })
        if (thisMinNode !== null) {
            if (rIterator === null) {
                rIterator = thisMinNode
            } else {
                (rIterator as ListNode).next = thisMinNode
                rIterator = thisMinNode
            }
            if (r === null) {
                r = rIterator
            }
        }

        let removingNode = l[index]
        if (removingNode !== null) {
            if (removingNode.next === null) {
                l.splice(index, 1)
            } else {
                l[index] = removingNode.next
            }
        }
    }
    return r
};