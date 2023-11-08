//using adjecency matrix

function depthFirstSearch(graph, startNode, targetNode) {
    visited = [startNode];
    path = [startNode];
    finalPath = []

    function depthFirstSearchInner(graph, startNode, targetNode) {
        if(startNode == targetNode) {
            return startNode;
        }

        for (i = 0; i < graph[startNode].length && finalPath.length < 1; i++){
            //console.log(i)
            if(visited.includes(graph[startNode][i] )){
                continue;
            }
            else {
                visited.push(graph[startNode][i])
                //console.log("visited = " + visited)
                path.push(graph[startNode][i])
                //console.log("path = " + path)

                if (path[path.length - 1] == targetNode) {
                    finalPath = path
                    //console.log("final path is now " + finalPath + "---------------------------")
                } else {
                    //console.log("another recursion round")
                    depthFirstSearchInner(graph, graph[startNode][i], targetNode )
                }

            }
            if (finalPath == []) {
            path.pop()
            }
        }
    }   

    depthFirstSearchInner(graph, startNode, targetNode)

    return finalPath;
}

a = [[0,1],[3,2],[1],[1,2]]
b = [[2],[6],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]]
console.log(depthFirstSearch(b,0,7))
console.log(depthFirstSearch(b,1,0))
console.log(depthFirstSearch(a,3,7))
console.log(depthFirstSearch(a,3,2))
console.log(depthFirstSearch(a,0,3))