/*
    GOAL: output if it's possible to find word in the board

    NOTES:
        letters must be sequentially adjacent (vert & horizont)
        board and word guaranteed to be exist
        assume word is case insensitive - convert to lowercase for ch match
        max 6 x 6 grid

    STRATEGY:
        global SUCCESS variable
        DFS traversal when constructing words
        iterate through the board
            if we find word[0], start dfs
                chI <- index of ch in word that we are looking for next
                gridPos
                dfs(gridPos, chI):
                    // base case
                    gridPos not valid
                    ch not in gridPos

                    if ch == last && in gridPos
                        SUCCESS = true;
                        return

                    // recursion if ch in gridPos
                    neighbors.forEach( n => dfs(n, chI+1) )

    REVISION:

*/

function exist(board: string[][], word: string): boolean {
    let success: boolean = false;

    const m: number = board.length;
    const n: number = board[0].length;
    for (let r=0; r<m; r++) {
      for (let c=0; c<n; c++) {
        // console.log(board[r][c].toLowerCase());
        if (board[r][c] === word[0]) {
            dfs(r,c,0, new Set<string>());
        }
      }  
    }

    return success;

    function dfs(r: number, c: number, chI: number, visited: Set<string>): void {
        // console.log(word[chI], visited.has(`${r}${c}`), visited);
        
        // base cases
        
        // we've already found the word! no more recursions needed
        if (success) return;

        // move to recursive check
        // // this pos has already been visited
        // else if ( visited.has(`${r} ${c}`) ) return;

        // // gridPos not valid
        // else if (
        //     r < 0
        //     || r >= m
        //     || c < 0
        //     || c >= n
        // ) return;

        // ch not in gridPos
        else if (board[r][c] !== word[chI]) return;
        
        // last ch in word reached!
        else if (
            board[r][c] === word[chI]
            && chI === word.length-1
        ) {
            success = true;
            return;
        }
        // else ch found in gridPos

        // add cur to visited set
        visited.add(`${r} ${c}`);
        
        // recursion
        const adjPos: [number, number][] = [
            [r, c+1], // up
            [r, c-1], // down
            [r-1, c], // l
            [r+1, c]  // r
        ];

        adjPos.forEach( ([nr,nc]) => {
            if (
                // in bounds
                nr >= 0
                && nr < m
                && nc >= 0
                && nc < n
                // and unvisited
                && !visited.has(`${nr} ${nc}`)
            ) dfs(nr, nc, chI+1, new Set<string>(visited));
        });

        return;
    }
};