/*
NOTES:
    parent's index = childIndex // 2
    lChild index = 2 * parentIndex
    rChild index = 1 + 2*parentIndex
*/

// Init Time: O(n log n)
// Add Time: O(log k)
// Space: O(k)

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

        // heapify - convert to minHeap O(log k)
        for (let i=Math.floor(k/2); i>0; i--) {
            this.bubbleDown(i);
        }
    }

    // O(log k)
    add(val: number): number {
        if (this.kHeap.length <= this.k) this.kHeap.push( this.kHeap[1] ); // add to our heap
        else if (val < this.kthLargest()) return this.kthLargest(); // no mods needed

        // else we need to adjust our heap
        this.kHeap[1] = val; // replace top of min heap

        // reheapify
        // and bubble down our new val to its rightful place
        this.bubbleDown(1);

        return this.kthLargest();
    }


    // swap a value down the heap tree from root -> leaf
    // O(log n)
    bubbleDown(curI: number): void {
        while ( curI * 2 < this.kHeap.length) { // while curNode has children
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
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */