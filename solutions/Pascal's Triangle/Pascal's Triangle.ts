/*
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1


NAIVE IMPLEMENTATION:
    hard code rows 1 & 2
    to create the next row,
        iterate through prev row
            add (cur + next) to next row arr
        
*/

function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];

    const pascTri: number[][] = [
        [1],
        [1,1]
    ];

    for (let i=2; i<numRows; i++) {
        const prevRow: number[] = pascTri[i-1];
        const newRow: number[] = [1];

        for (let j=0; j<prevRow.length-1; j++) {
            newRow.push( prevRow[j] + prevRow[j+1] );
        }

        newRow.push(1);
        pascTri.push(newRow);
    }

    return pascTri;
};