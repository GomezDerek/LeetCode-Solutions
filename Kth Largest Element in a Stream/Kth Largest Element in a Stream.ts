/*
NOTES:
    parent's index = childIndex // 2
    lChild index = 2 * parentIndex
    rChild index = 1 + 2*parentIndex
*/

class KthLargest {
    k: number;
    kHeap: number[]; // minHeap of size K
    kthLargest(): number { return this.kHeap[1] };

    constructor(k: number, nums: number[]) {
        this.k = k;

        // sort and splice to only include top k vals
        nums.sort((a,b) => b-a); // O(n logn)
        nums.splice(k);          // O(n-k)

        this.kHeap = [null, ...nums];

        // heapify - convert to minHeap O(k logk)
        for (let i=k; i>0; i--) {

            let j: number = i;
            while ( 
                Math.floor(j/2) > 0 
                && this.kHeap[j] < this.kHeap[ Math.floor(j/2) ] 
            ) {
                // swap with parent
                const tmp: number = this.kHeap[j];
                this.kHeap[j] = this.kHeap[ Math.floor(j/2) ];
                this.kHeap[ Math.floor(j/2) ] = tmp;

                j = Math.floor(j/2); // continue bubbling up
            }
        }
    }

    add(val: number): number {
        if (this.kHeap.length <= this.k) this.kHeap.push( this.kHeap[1] ); // add to our heap
        else if (val < this.kthLargest()) return this.kthLargest(); // no mods needed

        // else we need to adjust our heap
        this.kHeap[1] = val; // replace top of min heap

        // reheapify
        // and bubble up our new val to its rightful place
        let curI: number = 1;
        while ( curI * 2 <= this.k) {
            const lVal: number = this.kHeap[curI*2];
            const rVal: number = this.kHeap[curI*2 +1] ?? Infinity;
            const min: number = Math.min(this.kHeap[curI], lVal, rVal);

            let breakFlag: boolean = false;
            switch (min) {
                case this.kHeap[curI]:
                    breakFlag = true;
                    break;

                case lVal:
                    // swap cur with lChild
                    [this.kHeap[curI], this.kHeap[curI*2]] = [this.kHeap[curI*2], this.kHeap[curI]];
                    curI *= 2;
                    break;
                    
                case rVal:
                    // swap cur with rChild
                    [this.kHeap[curI], this.kHeap[curI*2 +1]] = [this.kHeap[curI*2 +1], this.kHeap[curI]];
                    curI = curI*2 +1;
                    break;
            }

            if (breakFlag) break;
            // else continue
        }

        return this.kthLargest();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */