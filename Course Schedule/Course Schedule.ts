/**
GOAL: determine if this graph has a cycle
STRAT:
    - create dict of classes and their prereqs
    - for each class, traverse graph and look for cycles
    - if cycle found, return false
    - else continue traversing each class in dict
    - once all classes have been checked, return true

    - for each class's prereq traversal, keep a visited set
    - optimization: when a class has been verified, 
                    remove prereqs to prevent retraversal when checking other classse

NOTES:
    at least 1 course guaranteed
    up to 5k edges

done planning at 9min
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const prereqs: number[][] = new Array(numCourses);
    for (let i=0; i<numCourses; i++) {
        prereqs[i] = [];
    }
    for (const [course, prereq] of prerequisites) {
        prereqs[course].push(prereq);
    }

    const visited = new Set<number>();
    for (let course=0; course<numCourses; course++) {
        if (hasCycle(course)) return false;
    }

    // all courses are cycle free!
    return true;

    // return true if class has cycle, false if no cycle
    function hasCycle(course: number): boolean {
        // base case
        if (visited.has(course)) return true; // cycle detected

        // pre-recurse op
        visited.add(course);

        // recurse
        for (const prereq of prereqs[course]) {
            if (hasCycle(prereq)) return true; // cycle in prereq
            else prereqs[course] = []; // no cycle in prereq, clear to avoid retraversal
        }

        // post-recurse op
        visited.delete(course);

        // return -> course has no cycle
        return false;
    }
};