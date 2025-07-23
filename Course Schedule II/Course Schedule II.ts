/*
    GOAL: return a topological order

    NOTES:
        DAG formed by prereqs
        cycle is possible

    STRATEGY:
        1. create the DAG
            arr index = course, value = prerequisites
        2. look for a cycle - with DFS
        3. create topo order - BFS
*/

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    
    // STEP 1
    const adjMatrix: number[][] = new Array(numCourses).fill(null).map(()=>[]);
    // console.log(arr);

    prerequisites.forEach( ([course, prereq]) =>{
        adjMatrix[course].push(prereq);
    });
    // console.log(adjMatrix);


    // STEP 2
    const visited = new Set<number>();

    for (let i=0; i<numCourses; i++) {
        if (detectCycle(i)) return [];
    }

    function detectCycle(curCourse: number): boolean {
        // base case
        if (visited.has(curCourse)) return true; // cycle detected

        // add visited
        visited.add(curCourse);

        // recurse through the neighbors
        const neighbors = adjMatrix[curCourse];
        for(let i=0; i<neighbors.length; i++) {
            if (detectCycle(neighbors[i])) return true;
        }

        // remove visited
        visited.delete(curCourse);

        return false; // no cycle detected
    }

    // STEP 3
    const order = new Deque<number>();

    const dq = new Deque<number>();

    for(let i=numCourses-1; i>=0; i--) {
        // add to queue
        dq.pushBack(i);

        // then bfs traverse
        while (dq.size() > 0) {
            const curCourse = dq.popFront();
            
            // if not visited
            if (!visited.has(curCourse)) {
                // add to topo order
                order.pushFront(curCourse);
                visited.add(curCourse);
                
                // traverse through prereqs
                const preReqs = adjMatrix[curCourse];
                preReqs.forEach( pR => dq.pushBack(pR) );
            }

            // else visited -> skip it
        }
    }

    return order.toArray();
};