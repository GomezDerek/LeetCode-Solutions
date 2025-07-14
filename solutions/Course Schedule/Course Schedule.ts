// CONCEDED AT 1 h 15 m
// then watched NC's solution
// POST-MORTEM: REMEMBER HOW TO CREATE AN EMPTY 2D ARRAY in TS AHHHHHH

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    
    // create the adj list
    const courses: number[][] = [];
    for (let i=0; i<numCourses; i++) courses.push([]);

    for (let i=0; i<prerequisites.length; i++) {
        const course: number = prerequisites[i][0];
        const prereq: number = prerequisites[i][1];

        courses[course].push(prereq);
    }

    // look for a cycle, starting from every course
    const traversed: Set<number> = new Set<number>();
    for (let i=0; i<numCourses; i++) {
        if ( hasCycle(i) ) return false; // cycle detected!
    }
 
    // no cycles detected! 😃
    return true;

    // func def for dfs traversal
    function hasCycle(course: number): boolean {
        // base case
        if (traversed.has(course)) return true; // cycle detected  

        traversed.add(course);

        // recursion
        const prereqs: number[] = courses[course];
        for (let i=0; i<prereqs.length; i++) {
            if (hasCycle(prereqs[i])) return true; // cycle detected!
        }

        // reset the set for the next DFS branch
        traversed.delete(course); 
        
        // this course's prereqs are validated. No need to check again in the future
        courses[course] = []; 

        // cycle not detected
        return false;
    }
};