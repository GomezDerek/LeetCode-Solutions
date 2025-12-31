function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const prereqs: number[][] = new Array(numCourses);
    for (let i=0; i<numCourses; i++) prereqs[i] = [];

    let course: number, prereq: number;
    for (let i=0; i<prerequisites.length; i++) {
        [course, prereq] = prerequisites[i];
        prereqs[course].push(prereq);
    }

    const visited = new Set<number>();
    for (let course=0; course<numCourses; course++) {
        if (hasCycle(course)) return false;
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
        }

        visited.delete(course);
        prereqs[course] = [];

        return false; // course has no cycle
    }
};