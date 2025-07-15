/*
    I had ChatGPT explain the solution in depth to me
    Strategy:
        use dislikes to build an undirected graph via adjacency list
        traverse with DFS
            alternate team assignments as we traverse
            return false if we find a conflict
*/

function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const adjList: number[][] = new Array(n+1).fill(null).map(()=>[]);

    dislikes.forEach( ([a,b]) => {
        // EDGES GO BOTH WAYS
        adjList[a].push(b);
        adjList[b].push(a);
    });

    // vertex teams can be 1 or 2
    const team: (number | null)[] = new Array(n+1).fill(null);
    const visited: Set<number> = new Set<number>();
    
    for (let i=1; i<=n; i++) {
        const iTeam: number = team[i] ?? 1; // default to team1 if no team yet
        if ( !dfs(i, iTeam) ) return false;
    }

    function dfs(v: number, vTeam: number): boolean {
        // first time vertex is visited
        if ( team[v] === null ) team[v] = vTeam;
        
        // vertex visited before
        else if ( team[v] !== vTeam ) return false; // conflict found
        else if (visited.has(v) && team[v] === vTeam) return true; // end traversal bc already visited


        visited.add(v);
        
        // recursion
        for (let i=0; i<adjList[v].length; i++) {
            const enemy: number = adjList[v][i];
            const enemyTeam: number = vTeam === 1 ? 2 : 1;
            if (!dfs(enemy, enemyTeam)) return false; // conflict found
        }

        visited.delete(v);
        adjList[v] = [];

        return true; // no falsehoods found
    }

    return true; // no falsehoods found
};