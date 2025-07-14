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
    const team1: Set<number> = new Set<number>([1]);
    const team2: Set<number> = new Set<number>();

    for (let i=1; i<=n; i++) {
        if ( !bfs(i) ) return false;
    }
    return true; // no fail case found! :D

    type Person = [number, number]; // [person, team]

    function bfs(start: number): boolean {
        const visited: Set<number> = new Set();
        const dq: Deque<Person> = new Deque<Person>();
        
        if ( start === 1) dq.pushFront([1,1]);
        else if ( team1.has(start) ) dq.pushFront([start,1]);
        else if ( team2.has(start) ) dq.pushFront([start,2]);
        else console.error(`${start} has no team at BFS start!`);

        while (dq.size() > 0) {
            // const cur: number = dq.popFront();
            const [cur, curTeam] = dq.popFront();

            switch (curTeam) {
                case 1:
                    if (team2.has(cur)) return false; // conflict!
                    else team1.add(cur);
                    break;
                case 2:
                    if (team1.has(cur)) return false; // conflict!
                    else team2.add(cur);
                    break;
            }

            if (visited.has(cur)) continue;

            // traverse to enemies
            const enemyTeam: number = curTeam === 1 ? 2: 1;
            adjList[cur].forEach(enemy => {
                dq.pushBack([enemy, enemyTeam])
            })

        }

        return true; // no fail case found
    }
};