export class ListNode {
    val: number
    next:ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    public printNodeList() {
        var t: ListNode | null = this
        while(t) {
            console.log( "t is ", t)
            t = t.next
        }
    }
}