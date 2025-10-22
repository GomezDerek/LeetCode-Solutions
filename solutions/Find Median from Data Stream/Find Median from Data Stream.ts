class MedianFinder {
    bottomHalf: MaxHeap<number> = new MaxHeap<number>();
    topHalf: MinHeap<number> = new MinHeap<number>();

    constructor() {}

    addNum(num: number): void {
        // insertion
        if (num < this.bottomHalf.root()) this.bottomHalf.insert(num)
        else this.topHalf.insert(num)

        // rebalancing
        if (Math.abs(this.bottomHalf.size() - this.topHalf.size()) > 1) {
            const [biggerHalf, smallerHalf] = this.bottomHalf.size() > this.topHalf.size()
                                ? [this.bottomHalf, this.topHalf]
                                : [this.topHalf, this.bottomHalf];

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
        else { // topHalf.size() > bottom-half.size()
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