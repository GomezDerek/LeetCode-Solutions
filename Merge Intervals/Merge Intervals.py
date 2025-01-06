class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # questions:
            # can the intervals be unsorted?
                # YES, THEY CAN BE UNSORTED
            # can intervals be sub intervals of each other
            # can startI ?= endI
                # YES
            # description doesn't say the answer doesn't need to be sorted...

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
            # rewrite this because it's intervals are not sorted!
            # if currInterval[1] >= intervals[i][0]:
            # [1,4][4,5]     [1,4][0,4]    [1,4][0,1]   [1,4][0,0]
            # [1,6] [8,10]
            if currInterval[1] >= intervals[i][0] and currInterval[0] <= intervals[i][1]:
                # merge by updating curr's end
                currInterval[1] = max(currInterval[1], intervals[i][1])
                currInterval[0] = min(currInterval[0], intervals[i][0])
            
            # intervals do not overlap
            else:
                # update answer and reset curr
                answer.append(currInterval)
                currInterval = intervals[i]
        
        # add last interval
        answer.append(currInterval)

        return answer