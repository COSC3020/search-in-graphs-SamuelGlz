//using adjecency list

function depthFirstSearch(graph, startNode, targetNode) {
    visited = [startNode];
    path = [startNode];

    function depthFirstSearchInner(graph, startNode, targetNode) {
        if(startNode == targetNode) {
            return startNode;
        }
        for (i = 0; i < graph[startNode].length; i++){
            if(visited.includes(graph[startNode][i] )){
                continue;
            }
            else {
                visited.push(graph[startNode][i])
                path.push(graph[startNode][i])
                depthFirstSearchInner(graph, graph[startNode][i], targetNode )
            }
        }
        //path.pop()
    }   

    depthFirstSearchInner(graph, startNode, targetNode)

    return path;
}


a = [[0],[3,2],[1],[1,2]]
depthFirstSearch(a)
console.log(depthFirstSearch(a,3,2))