class MinStack:

    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        
    def top(self) -> int:
        return self.stack[-1]        

    def getMin(self) -> int:
        return min(self.stack)
        # curr_min = float(inf)
        # for n in self.stack:
        #     curr_min = n if n < curr_min else curr_min
        # return curr_min
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()