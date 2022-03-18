type treeNode = {
    candidate: number,
    parentCandidateNode: treeNode | undefined,
    parentCandidatesIndexSet: Array<number>,
    childrenCandidates?: treeNode[],
    nodeValue: number,
}

export function combinationSum2(candidates: number[], target: number): number[][] {
    let results: number[][] = []
    let rootNode = { candidate: -1, parentCandidateNode: undefined, parentCandidatesIndexSet: new Array<number>(), nodeValue: 0 }
    let nextHandleNodes: treeNode[] = [rootNode]
    generateResults(candidates, target, [rootNode], results)
    while (nextHandleNodes.length > 0) {
        nextHandleNodes = generateResults(candidates, target, nextHandleNodes, results)
    }
    return results
};

function generateResults(candidates: number[], target: number, nodes: treeNode[], results: number[][]): treeNode[] {
    let nextHandleNodes: treeNode[] = []
    nodes.forEach((node) => {
        if (node.parentCandidatesIndexSet.length == candidates.length) {
            return
        }
        let maxIndex = node.parentCandidatesIndexSet.reduce((a, b) => { return Math.max(a, b) }, -Infinity)
        candidates.forEach((candidateValue, candidateIndex) => {
            if (candidateIndex > maxIndex && candidateValue + node.nodeValue <= target) {
                if (!node.childrenCandidates) {
                    node.childrenCandidates = []
                }
                let updatedParentCandidatesIndexSet = Array.from(node.parentCandidatesIndexSet)
                updatedParentCandidatesIndexSet.push(candidateIndex)
                let newNode: treeNode = {
                    candidate: candidateValue,
                    parentCandidateNode: node,
                    parentCandidatesIndexSet: updatedParentCandidatesIndexSet,
                    nodeValue: candidateValue + node.nodeValue,
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
    //  generateResults(candidates, target, nextHandleNodes, results)
}