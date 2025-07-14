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
    const visiting: Set<number> = new Set<number>();

    if (!dfs(1, team1)) return false;
    for (let i=2; i<=n; i++) {
        if ( !dfs(i, null) ) return false;
    }

    // console.log(visiting);
    // console.log(team1);
    // console.log(team2);
    return true; // no fail case found! :D


    function dfs(person: number, team: Set<number>): boolean {
        // base case
        if (
            team !== null &&
            (team === team1 ? team2: team1).has(person)
        ) {
            // console.log(person, " is in the wrong team!");
            return false;
        }
        else if (visiting.has(person)) return true;

        team.add(person);
        visiting.add(person);
        // recursion
        for (let i=0; i<adjList[person].length; i++) {
            const enemyTeam: Set<number> = team === team1 ? team2: team1;
            if ( !dfs(adjList[person][i], enemyTeam) ) {
                // console.log(`parent triggered`);
                return false;
            }
        }

        return true; // no fail cases found
    }


};

// 1: 1
// 2: 2 
// 3: 1