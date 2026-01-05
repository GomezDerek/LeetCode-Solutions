/**
GOAL: 
    return a topological sort of courses
STRAT:
    ASSUME courses form a DAG, scratch that - cycles are possible
    courses with no prereqs go first, courses with prereqs go last
    
    use topo sort output: set() because keeps insertion order

    1. create a map where key: prereq, val: courses to take next
    2. iterate through courses:
        a. add to topo sort output 
        b. if prereq has next_courses:
            i. nav to next_courses, repeat


NOTES:
    no tricks or edge cases in input
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const output = new Set<number>();

    const nextCourses: number[][] = Array.from( {length: numCourses}, a => [] );
    
    for (const [course, prereq] of prerequisites) {
        // nextCourses[prereq].push(course);
        nextCourses[course].push(prereq);
    }
    console.log(nextCourses);

    let cycleDetected = false;
    const visited = new Set<number>();

    for (let i=0; i<numCourses; i++) {
        dfs(i);
        if (cycleDetected) return []; // "If it is impossible to finish all courses, return an empty array.""
        visited.clear();
    }

    return [...output];

    // funcs hoisted
    function dfs(i: number): void {
        // base case(s)
        if (visited.has(i)) {
            cycleDetected = true;
            return;
        }
        
        // pre-ops
        visited.add(i);
        output.add(i);

        // recurse
        for (const nextCourse of nextCourses[i]) {
            dfs(nextCourse);
        }

        // post-ops
        visited.delete(i);
    }
};