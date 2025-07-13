/*
    GOAL: find a cycle in the DAG

    NOTES: 
        prerequisites.length up to 5k
        courses up to 2k
        cycle exists if backward edge is detected. 
            back edge = node connects back to existing graph

        ASSUME cycle exists only if classes are direct prereqs of each other
        👆 Incorrect assumption

    STRATEGY:
        create graph from prereqs[]
        hashmap {node: prereqs}
        if node exists as a prereq w/in its prereqs' prereqs, cycle exists
*/
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    
    // create adj list
    const courses: number[][] = [];
    for (let i=0; i<numCourses; i++) courses.push([]);

    for (let i=0; i<prerequisites.length; i++) {
        const course: number = prerequisites[i][0];
        const prereq: number = prerequisites[i][1];

        if (course === prereq) return false; // edge case
        
        courses[course].push(prereq);
    }

    // console.log(courses);

    // look for cycle
    // returns [vertex, cycleFound]
    const traversed: boolean[] = new Array(numCourses).fill(false);
    for (let i=0; i<numCourses; i++) {
        if ( !traversed[i] && courses[i].length>0) { // if untraversed & has prereqs
            // if cycle detected
            if (dfs(i)) return false;
        };
    }

    function dfs(vertex: number): boolean {
        // base case
        if (traversed[vertex]) return true;

        traversed[vertex] = true;

        // recursion
        // traverse through the prereqs
        let cycleDetected: boolean = false;
        for (let i=0; i<courses[vertex].length; i++) {
            if (dfs(courses[vertex][i])) {
                cycleDetected = true;
                break;
            }
        }

        // return
        return cycleDetected;
    }

    return true;
};