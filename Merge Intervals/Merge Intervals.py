class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # inspired by Greg Hogg's solution

        intervals.sort(key= lambda interval: interval[0])
        
        answer = [intervals[0]]

        for interval in intervals[1:]:
            if interval[0] <= answer[-1][1]:
                answer[-1][1] = max(interval[1], answer[-1][1])
            else:
                answer.append(interval)

        return answer