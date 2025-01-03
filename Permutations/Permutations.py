class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # strategy
        # just do this the dumb, hard way with nested loops

        # restrategy
        # recursive decision trees

        permutations = []

        def p(curr, remainder):
            print(curr, remainder)
            # base case
            if not remainder:
                permutations.append(curr)
                return

            # recursive call(s)
            for i, num in enumerate(remainder):
                newCurr = curr[:] + [num]
                newRemainder = []
                if i == 0:
                    newRemainder = remainder[i+1:]
                elif i == len(remainder)-1:
                    newRemainder = remainder[:i]
                elif 0 < i < len(remainder)-1:
                    newRemainder = remainder[:i] + remainder[i+1:]
                
                p(newCurr, newRemainder)

        p([], nums)
        return permutations