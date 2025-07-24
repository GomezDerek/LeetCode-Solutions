// NC DFS solution

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const adjList: number[][] = new Array(numCourses).fill(null).map(()=>[]);

    // fill the adj list
    for (const [course, prereq] of prerequisites) {
        adjList[course].push(prereq);
    }

    const topoSort: number[] = [];

    // run dfs on each course
    const visited = new Set<number>();
    const inCycle = new Set<number>();
    for (let i=0; i<numCourses; i++) {
        if ( !dfs(i) ) return [];
    }
    
    return topoSort; // replace me

    // returns if graph is non-cyclic
    function dfs(curCourse: number): boolean {
        
        if (visited.has(curCourse)) return true;
        else if (inCycle.has(curCourse)) return false;

        inCycle.add(curCourse);
        
        for (const prereq of adjList[curCourse]) {
            if (!dfs(prereq)) return false;
        }

        inCycle.delete(curCourse);
        visited.add(curCourse);
        topoSort.push(curCourse);

        return true; 
    }
};