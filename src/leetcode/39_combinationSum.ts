
type treeNode = {
    candidate: number,
    parentCandidateNode: treeNode | undefined,
    childrenCandidates?: treeNode[],
    nodeValue: number,
}

export function combinationSum(candidates: number[], target: number): number[][] {
    let results: number[][] = []
    generateResults(candidates, target, { candidate: -1, parentCandidateNode: undefined, nodeValue: 0 }, results)
    return results
};

function generateResults(candidates: number[], target: number, node: treeNode, results: number[][]) {
    candidates.forEach((candidateValue) => {
        if (candidateValue + node.nodeValue <= target) {
            if (!node.childrenCandidates) {
                node.childrenCandidates = []
            }
            let newNode: treeNode = {
                candidate: candidateValue,
                parentCandidateNode: node,
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
            generateResults(candidates, target, newNode, results)
        }
    })
}