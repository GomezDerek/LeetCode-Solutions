/**
    GOAL: find target word in the board
    STRATEGY:
        DFS from every square
        keep track of visited squares for each traversal
    NOTES:
 */
function exist(board: string[][], word: string): boolean {
    const M: number = board.length;
    const N: number = board[0].length;
    const wordArr: string[] = word.split("");

    const visited: Set<string> = new Set();
    const curWord: string[] = [];

    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (dfs(i,j)) return true;
        }
    }

    return false;

    function dfs(x: number, y: number): boolean {
        // base cases
        // word built
        if (word.length === curWord.length) {
            return word === curWord.join("");
        }
        // alr visited
        else if (visited.has(`${x},${y}`)) return false;
        // out of bounds
        else if (
            x < 0
            || x >= M
            || y < 0
            || y >= N
        ) {
            return false;
        }
        // next ch not valid
        else if (board[x][y] !== wordArr[curWord.length]) {
            return false;
        }

        // add board[x][y]
        visited.add(`${x},${y}`);
        curWord.push(board[x][y]);

        // recursion
        const dxdy: [number, number][] = [
            [x+1,y],
            [x-1,y],
            [x,y+1],
            [x,y-1]
        ];
        for (const [nx,ny] of dxdy) {
            if (dfs(nx,ny)) return true;
        }

        // remove board[x][y]
        visited.delete(`${x},${y}`);
        curWord.pop();

        return false;
    }
};