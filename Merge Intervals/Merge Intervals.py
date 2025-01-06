class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        
        answer = [intervals[0]]

        for i in range(1, len(intervals)):
            interval = intervals[i]

            print(answer[-1], interval)
            # if answer[-1][0] < interval[0] and answer[-1][1] < interval[0]:
            #     answer.append(interval)
            #     continue
            merged = False
            while answer[-1][1] >= interval[0] and answer[-1][0] <= interval[1]:
                answer[-1][1] = max(answer[-1][1], interval[1])
                answer[-1][0] = min(answer[-1][0], interval[0])
                
                # all intervals have been merged so far
                if answer[-1] is answer[0]:
                    merged = True
                    break
                else:
                    interval = answer.pop()
            
            if not merged:
                answer.append(interval)
                               
            
            # intervals do not overlap

            # else:
            #     # update answer and reset curr
            #     answer.append(currInterval)
            #     currInterval = intervals[i]
        

        return answer