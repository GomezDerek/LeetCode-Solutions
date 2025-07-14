/*
    GOAL
        determine if we need more than 2 groups

    NOTES
        this is a graph
            dislikes are edges
            people are vertices

        FAIL CASE: enemies can't share mutual enemies
            1 -> 3
            1 -> 2
            3 -> 2

            1 -> 2 <- 3
            ----------^

        cycle detection? no.
        alternate path detection?

        1 -> 4
        7 -> 4
        4 -> 7
        4 -> 1

        1 <-> 4
        7 <---^


    STRATEGY:
        create adj list O(V + E)
        BFS from each person O(V+E)
            and if a vert is traversed twice
                2 groups is not possible

*/

function possibleBipartition(n: number, dislikes: number[][]): boolean {
    
    // create adjacency list from dislikes[][]
    const adjList: number[][] = new Array(n+1).fill(null).map(()=>[]);
    dislikes.forEach(([a,b]) =>{
        // a dislikes b
        adjList[a].push(b);
    });
    console.log(adjList);

    // look for fail case
    for (let i=1; i<=n; i++) {
        if ( !bfs(i) ) return false;
    }
    return true; // no fail case found! :D

    function bfs(start: number): boolean {
        const visited: Set<number> = new Set();
        const dq: Deque<number> = new Deque<number>([start]);

        while (dq.size() > 0) {
            const cur: number = dq.popFront();
            if ( visited.has(cur) ) return false; // fail case
            // else continue
            visited.add(cur);
            
            console.log(adjList[cur]);
            adjList[cur].forEach( enemy => dq.pushBack(enemy) );
        }

        return true; // no fail case found
    }
};