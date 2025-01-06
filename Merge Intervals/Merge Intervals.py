class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # questions:
            # can the intervals be unsorted?
                # YES, THEY CAN BE UNSORTED
            # can intervals be sub intervals of each other
            # can startI ?= endI

        # strategy
        # keep track of an interval as we iterate through the list
        # if next interval doesn't overlap
            # add currInterval to answer
            # reset currInterval

        answer = []
        currInterval = intervals[0]

        for i in range(1, len(intervals)):
            # print(intervals[i])

            # if intervals overlap, merge it into currInterval
            # if curr's end > interval's start
            if currInterval[1] >= intervals[i][0]:
                # merge by updating curr's end
                currInterval[1] = intervals[i][1]
                currInterval[0] = min(currInterval[0], intervals[i][0])
            
            # intervals do not overlap
            else:
                # update answer and reset curr
                answer.append(currInterval)
                currInterval = intervals[i]
        
        # add last interval
        answer.append(currInterval)

        return answer