export function isValid(s: string): boolean {
    var stack: string = ""
    for (let i = 0; i < s.length; i++) {
        var v = s.charAt(i)
        if (v === '(' || v === '{' || v === '[') {
            stack += v
        } else if (v == ')') {
            if (stack.length > 0 && stack.charAt(stack.length - 1) === '(') {
                stack = stack.slice(0, stack.length - 1)
            } else {
                return false
            }
        } else if (v == ']') {
            if (stack.length > 0 && stack.charAt(stack.length - 1) === '[') {
                stack = stack.slice(0, stack.length - 1)
            } else {
                return false
            }
        } else if (v == '}') {
            if (stack.length > 0 && stack.charAt(stack.length - 1) === '{') {
                stack = stack.slice(0, stack.length - 1)
            } else {
                return false
            }
        }
    }
    return !(stack.length > 0)
};