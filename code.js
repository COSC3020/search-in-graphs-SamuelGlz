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
