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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    var l1 = list1
    var l2 = list2

    var l3: ListNode | null = null
    var l3LastNode: ListNode | null = l3

    while (l1 !== null || l2 !== null) {
        var addingNode: ListNode | null = null

        if (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                addingNode = l1
                l1 = l1.next
            } else {
                addingNode = l2
                l2 = l2.next
            }
        } else if (l1 == null) {
            if (l3LastNode != null) {
                l3LastNode.next = l2
                return l3
            } else {
                return l2
            }
        } else if (l2 == null) {
            if (l3LastNode != null) {
                l3LastNode.next = l1
                return l3
            } else {
                return l1
            }
        }

        if (l3 == null) {
            l3 = addingNode
            l3LastNode = addingNode
        } else {
            if (l3LastNode !== null) {
                l3LastNode.next = addingNode
            }
            l3LastNode = addingNode
        }
    }
    return l3
};