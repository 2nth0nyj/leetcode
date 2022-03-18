type treeNode = {
    candidate: number,
    parentCandidatesIndexes: number[],
    nodeValue: number,
    parentCandidateNode?: treeNode,
    childrenCandidates?: treeNode[],
    valueArray: string,
}


export function combinationSum2(candidates: number[], target: number): number[][] {
    let results: number[][] = []
    let rootNode: treeNode = { candidate: -1, parentCandidatesIndexes: new Array<number>(), nodeValue: 0, valueArray: "" }
    let nextHandleNodes: treeNode[] = [rootNode]
    nextHandleNodes = generateResults(candidates, target, nextHandleNodes, results)
    while (nextHandleNodes.length > 0) {
        nextHandleNodes = generateResults(candidates, target, nextHandleNodes, results)
        let resultStringSet = new Set<string>()
        nextHandleNodes = nextHandleNodes.filter((n) => {
            if (!resultStringSet.has(n.valueArray)) {
                resultStringSet.add(n.valueArray)
                return true
            }
            return false
        })
    }
    return results
};

function generateResults(candidates: number[], target: number, nodes: treeNode[], results: number[][]): treeNode[] {
    let nextHandleNodes: treeNode[] = []
    nodes.forEach((node) => {
        if (node.parentCandidatesIndexes.length == candidates.length) {
            return
        }
        let maxIndex = node.parentCandidatesIndexes.reduce((a, b) => { return Math.max(a, b) }, -Infinity)
        candidates.forEach((candidateValue, candidateIndex) => {
            if (candidateIndex > maxIndex && candidateValue + node.nodeValue <= target) {
                if (!node.childrenCandidates) {
                    node.childrenCandidates = new Array<treeNode>()
                }
                let updatedParentCandidatesIndexSet = Array.from(node.parentCandidatesIndexes)
                updatedParentCandidatesIndexSet.push(candidateIndex)

                let valueArray: string = node.valueArray + candidateValue.toString()
                let newNode = {
                    candidate: candidateValue,
                    parentCandidatesIndexes: updatedParentCandidatesIndexSet,
                    nodeValue: candidateValue + node.nodeValue,
                    parentCandidateNode: node,
                    valueArray: valueArray
                }
                node.childrenCandidates.push(newNode)
                if (newNode.nodeValue == target) {
                    var thisParentNode: treeNode | undefined = newNode.parentCandidateNode
                    var thisResult: Array<number> = [candidateValue]
                    while (thisParentNode && thisParentNode.candidate !== -1) {
                        thisResult.push(thisParentNode.candidate)
                        thisParentNode = thisParentNode.parentCandidateNode
                    }
                    thisResult.sort((a: number, b: number) => a - b)
                    //check duplicate
                    let hasDuplicate = results.some((eachResult) => {
                        if (eachResult.length == thisResult.length) {
                            let arraySame = eachResult.every((v, i) => {
                                return thisResult[i] === v
                            })
                            return arraySame
                        }
                        return false
                    })
                    if (!hasDuplicate) {
                        results.push(thisResult)
                    }
                }
                nextHandleNodes.push(newNode)
            }
        })
    })
    return nextHandleNodes
}