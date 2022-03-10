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
import { ListNode } from './listNode'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    var fast = head
    var slow = head
    var distance = 0
    var slowMoved = false
    while (fast !== null && fast.next !== null) {
        fast = fast.next
        if (distance == n) {
            slowMoved = true
            if (slow !== null) {
                slow = slow.next
            }
        } else {
            distance++
        }
    }
    if (!slowMoved) {
        if (distance == n && slow !== null && slow.next !== null && slow.next !== null) {
            slow.next = slow.next.next
        } else {
            if (slow !== null) {
                return slow.next
            }
        }
    } else if (slow !== null && slow.next !== null && slow.next.next === null) {
        slow.next = null
    } else {
        if (slow !== null && slow.next !== null) {
            slow.next = slow.next.next
        }
    }
    return head
};