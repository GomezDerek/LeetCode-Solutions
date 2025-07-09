class KthLargest {
    heap: number[] = [null];
    k: number = null;

    getKthLargest = function() {

        // traverse through k nodes
        // return the smallest amongst nodes traversed
        let minVal: number = this.heap[1];
        let numSeen: number = 1;

        let i: number = 1;
        while ( i < this.heap.length && numSeen < this.k-2 ) {
            const leftChild: number = this.heap[i+ (i%2 === 1 ? 1: 2) ];
            const rightChild: number = this.heap[i+ (i%2 === 1 ? 2: 3)];
            
            minVal = Math.min(minVal, leftChild, rightChild);

            numSeen += 2;
            if (i%2 === 1) i += leftChild > rightChild ? 1 : 2;
            else if (i%2 === 0) i += leftChild > rightChild ? 2 : 3;
        }

        console.log(i, this.heap[i], numSeen, minVal);
        if (this.k === numSeen) return this.heap[i];
        else if (numSeen +1 === this.k && i%2 === 1) return [minVal, this.heap[i+1], this.heap[i+2]].sort((a,b) => b-a)[1]; // middle valuse
        else if (numSeen +1 === this.k && i%2 === 0) return [minVal, this.heap[i+2], this.heap[i+3]].sort((a,b) => b-a)[1]; // middle valuse
        else if (numSeen +2 === this.k && i%2 === 1) return Math.min(minVal, this.heap[i+1], this.heap[i+2]);
        else if (numSeen +2 === this.k && i%2 === 0) return Math.min(minVal, this.heap[i+2], this.heap[i+3]);


        // 👇 first attempt
        // BFS ??
        // lvl1 = 1 largest   (1)
        // lvl2 = 2-3 largest (2)
        // lvl3 = 4-7 largest (4)
        // lvl4 = 8-15 largest (8)
        // const heapLvl: number = 1 + Math.floor( Math.log2(this.k) );
        // const lvlSize: number = 2*(heapLvl-1);
        // // console.log(`${this.k}'s heaplevel is ${heapLvl}. lvlSize is ${lvlSize}`)
        // const heapVals: number[] = this.heap.slice(2*(heapLvl-1), 2*(heapLvl-1) + lvlSize);
        // heapVals.sort( (a,b) => b-a);
        // // console.log(`level ${heapLvl} desc sorted`, heapVals);
        // return heapVals[ this.k - 2*(heapLvl-1) ];
    }
    
    constructor(k: number, nums: number[]) {
        this.k = k;
        //heapify the nums arr
        this.heap = [null, ...nums];
        // console.log(this.heap);

        // sort
        let cur: number;
        let parent: number;
        let i: number = Math.floor(this.heap.length-1 / 2); 
        while (Math.floor(i/2) > 0) {
            cur = this.heap[i];
            parent = this.heap[ Math.floor(i/2) ];
            
            if (cur > parent) {
                // switch
                let tmp: number = cur;
                this.heap[i] = parent;
                this.heap[ Math.floor(i/2) ] = tmp;
            }
            i--; // do this for all "nodes"
        }


        console.log('initialized: ', this.heap);
    }

    add(val: number): number {
        
        // add val to end and percolate into pos
        this.heap.push(val);

        let i: number = this.heap.length -1;
        while ( Math.floor(i/2) > 0) { // while cur node has parent
            // if our new val is less than its parent
            if ( this.heap[i] > this.heap[ Math.floor(i/2) ] ) {
                // swap to percolate
                let tmp: number = this.heap[i]; // tmp = val
                this.heap[i] = this.heap[ Math.floor(i/2) ];
                this.heap[ Math.floor(i/2) ] = tmp;
                i = Math.floor(i/2);
            }
            else break;
        } 
        console.log(`\n${val} added:\n`, this.heap);

        const kthLargest: number = this.getKthLargest();
        console.log(`${this.k}th largest: ${kthLargest}`);
        return kthLargest;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

 //

//  [_,10,9,7,8,9,3,2,7,7,7]
//      1 2 3 4 5 6 7 8 9 10
/*
           10
       9        7
     8    9   3   2
   7  7  7 
*/