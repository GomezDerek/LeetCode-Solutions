/*
    GOAL: find a cycle in the DAG

    NOTES: 
        prerequisites.length up to 5k
        courses up to 2k
        cycle exists if backward edge is detected. 
            back edge = node connects back to existing graph

        ASSUME cycle exists only if classes are direct prereqs of each other

    STRATEGY:
        create graph from prereqs[]
        hashmap {node: prereqs}
        if node exists as a prereq w/in its prereqs' prereqs, cycle exists
*/
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const courses: number[][] = [];
    for (let i=0; i<numCourses; i++) courses.push([]);

    for (let i=0; i<prerequisites.length; i++) {
        const course: number = prerequisites[i][0];
        const prereq: number = prerequisites[i][1];

        if (courses[prereq].includes(course)) return false;
        else if (course === prereq) return false; // edge case
        
        courses[course].push(prereq);
    }

    return true;
};