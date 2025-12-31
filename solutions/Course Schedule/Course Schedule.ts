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
        prereqs[course] = [];
    }

    // all courses are cycle free!
    return true;

    function hasCycle(course: number): boolean {
        if (visited.has(course)) return true; // cycle detected

        visited.add(course);

        // for (const prereq of prereqs[course]) {
        for (let i=0; i<prereqs[course].length; i++) {
            if (hasCycle( prereqs[course][i] )) return true; // cycle detected in prereq
            else prereqs[course] = [];
        }

        visited.delete(course);

        return false; // course has no cycle
    }
};