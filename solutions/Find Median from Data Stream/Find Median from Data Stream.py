import heapq

class MedianFinder:

    def __init__(self):
        self.topHalf = []     # minHeap by default
        self.bottomHalf = []  # maxHeap by... coercion. Store inverted vals

    def addNum(self, num: int) -> None:
        # insertion
        if (len(self.topHalf) > 0 and num > self.topHalf[0]): heapq.heappush(self.topHalf, num)
        else: heapq.heappush(self.bottomHalf, -1*num)

        # rebalancing
        if (abs(len(self.topHalf) - len(self.bottomHalf)) > 1):
            if (len(self.topHalf) > len(self.bottomHalf)):
                heapq.heappush(self.bottomHalf, -1*heapq.heappop(self.topHalf) )
            else: # len(bottomHalf) > len(topHalf)
                heapq.heappush(self.topHalf, -1*heapq.heappop(self.bottomHalf))

    def findMedian(self) -> float:
        if (len(self.topHalf) == len(self.bottomHalf)):
            return 0.5*(self.topHalf[0] + (-1*self.bottomHalf[0]))
        elif (len(self.topHalf) > len(self.bottomHalf)):
            return self.topHalf[0]
        else: # len(topHalf) < len(bottomHalf)
            return -1*self.bottomHalf[0]


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()