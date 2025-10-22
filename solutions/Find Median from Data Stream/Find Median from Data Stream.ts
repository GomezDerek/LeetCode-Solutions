/**
STRATEGY:
    we need to keep track of median,
    by keeping the list sorted

    BRUTE FORCE SORTED ARRAY:
    resorting after every insertion is O(n logn)
    findMedian would be O(1)

    HEAP:
    top-k and bottom-k heaps store half
    
    if heap sizes not equal, use median var
    if heaps sizes equal, avg(roots)

    simulation:
    [1,2,3,4,5,6]
    top-k: [4,5,6]
    bottom-k: [1,2,3]
    median is (top-k.root() + bottom-k.root()) / 2

    insert(8)
    8 > top-k.root()
    8 > 4
    top-k.pop()
    top-k.insert(8)

    median = 4
    top-k: [5,6,8]
    bottom-k: [1,2,3]

    insert(-1)
    -1 < bottom-k.root() && median 
    -1 <3 && 4
    bottom-k.insert(-1)
    top-k.insert(4)
    median = null

    OR 
    insert(num)
    if num < bottom-k.root()
        bottom-k.insert(num)
    else top-k.insert(num)

    if (heap size diff >1)
        rebalance


NOTES:
    int val between -10,000 and 10,000
    up to 50,000 vals in list
 */

class MedianFinder {
    bottomHalf: MaxHeap<number> = new MaxHeap<number>();
    topHalf: MinHeap<number> = new MinHeap<number>();

    constructor() {
    }

    addNum(num: number): void {
        // insertion
        // might need err handling if (number < undefined)
        if (num < this.bottomHalf.root()) this.bottomHalf.insert(num)
        else this.topHalf.insert(num)

        // rebalancing
        if (Math.abs(this.bottomHalf.size() - this.topHalf.size()) > 1) {
            const biggerHalf = this.bottomHalf.size() > this.topHalf.size()
                                ? this.bottomHalf
                                : this.topHalf;
            const smallerHalf = this.bottomHalf.size() < this.topHalf.size()
                                ? this.bottomHalf
                                : this.topHalf;

            smallerHalf.insert( biggerHalf.extractRoot() );
        }
    }

    findMedian(): number {
        if (this.bottomHalf.size() === this.topHalf.size()) {
            return (this.bottomHalf.root() + this.topHalf.root())/2;
        }
        else if (this.bottomHalf.size() > this.topHalf.size()) {
            return this.bottomHalf.root();
        }
        else { // this.topHalf.size() > bottom-half.size()
            return this.topHalf.root();
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */