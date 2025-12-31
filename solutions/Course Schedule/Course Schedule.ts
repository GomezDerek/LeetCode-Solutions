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

        let prereq: number;
        for (let i=0; i<prereqs[course].length; i++) {
            prereq = prereqs[course][i];
            if (hasCycle(prereq)) return true; // cycle detected in prereq
            else prereqs[prereq] = [];
        }

        visited.delete(course);

        return false; // course has no cycle
    }
};