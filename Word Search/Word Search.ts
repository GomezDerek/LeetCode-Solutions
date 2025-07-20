function exist(board: string[][], word: string): boolean {
    const ROWS = board.length;
    const COLS = board[0].length;

    const path = new Set<string>();
    
    for (let i=0; i<ROWS; i++) {
        for (let j=0; j<COLS; j++) {
            if (dfs(i,j,0)) return true;            
        }
    }

    return false;

    function dfs(r: number, c: number, i: number ): boolean {
        if (i === word.length) return true; 
        else if (
            r < 0
            || r >= ROWS
            || c < 0
            || c >= COLS
            || board[r][c] !== word[i]
            || path.has(`${r} ${c}`)
        ) return false;

        path.add(`${r} ${c}`);

        const res: boolean = dfs(r+1, c, i+1)
            || dfs(r-1, c, i+1)
            || dfs(r, c+1, i+1)
            || dfs(r, c-1, i+1);

        path.delete(`${r} ${c}`);

        return res;
    }
};