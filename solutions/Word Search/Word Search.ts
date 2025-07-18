
/* optimizing by using a global visited Set instead of duplicating for every recursion */
function exist(board: string[][], word: string): boolean {
    let success: boolean = false;

    const m: number = board.length;
    const n: number = board[0].length;

    const visited = new Set<string>();

    // iterate through the board
    for (let r=0; r<m; r++) {
      for (let c=0; c<n; c++) {
        // console.log(board[r][c].toLowerCase());
        if (board[r][c] === word[0]) {
            visited.add(`${r} ${c}`);
            dfs(r,c,0);
            visited.delete(`${r} ${c}`);
        }
      }  
    }

    return success;

    function dfs(r: number, c: number, chI: number): void {
        // console.log(word[chI], visited.has(`${r}${c}`), visited);
        
        // base cases
        
        // we've already found the word! no more recursions needed
        if (success) return;

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
        // else (ch found in gridPos) continue to rest of dfs
        
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
                // and ch in new gridPos
                && board[nr][nc] === word[chI+1]
            ) {
                visited.add(`${nr} ${nc}`);
                dfs(nr, nc, chI+1);
                visited.delete(`${nr} ${nc}`);
            }
        });

        return;
    }
};