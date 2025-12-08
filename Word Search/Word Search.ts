function exist(board: string[][], word: string): boolean {
    const M: number = board.length;
    const N: number = board[0].length;
    const wordArr: string[] = word.split("");
    const visited: Set<string> = new Set<string>();

    const curWord: string[] = [];

    for (let i=0; i<M; i++) {
        for (let j=0; j<N; j++) {
            if (dfs(i,j)) return true;
        }
    }
    return false;

    function dfs(i: number, j: number): boolean {

        // bad base cases
        if (
            visited.has(`${i} ${j}`)
            || i < 0
            || i >= M
            || j < 0
            || j >= N
            || board[i][j] !== wordArr[curWord.length]
        ) return false;

        // good base case
        else if (
            curWord.length+1 === wordArr.length
            && board[i][j] === wordArr[wordArr.length-1]
        ) {
            return true;
        }

        // ops
        curWord.push(board[i][j]);
        visited.add(`${i} ${j}`)

        // recursion
        const dxdy: {x: number, y: number}[] = [
            {x: i+1, y: j},
            {x: i-1, y: j},
            {x: i, y: j+1},
            {x: i, y: j-1}
        ]
        for (const {x,y} of dxdy) {
            if (dfs(x,y)) return true;
        }

        curWord.pop();
        visited.delete(`${i} ${j}`);
        return false;
    }
};