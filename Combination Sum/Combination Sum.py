class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        # strategy
        # step 1: calc factorials for target
        # step 2: find factorials in candidates
        # step 3: calc combinations
            # combo a: consists of only one factorial (i.e. 2)
            # combo b: consists of multiple factorials (i.e. 2,3)
            # combo c: higher factorials included (i.e. 4)

        # no combinations if
        # no factorials are in candidates[]


        # new strategy
        # O(n^2) runtime
        # for each num in candidates: try to make combinations with every other candidate


        combinations = {}

        for n, num in enumerate(candidates):
            if num > target:
                continue

            for i in range(1, target//num+1):
                # combo a
                if i*num == target:
                    combo = [num for _ in range(target//num)]
                    sorted_tup = tuple( x for x in sorted(combo) )
                    combinations[sorted_tup] = combo

                else:
                    diff = target - i*num
                    if diff in candidates:
                        combo = [num for _ in range(i)] + [diff]
                        sorted_tup = tuple( x for x in sorted(combo))
                        
                        if sorted_tup not in combinations.keys():
                            combinations[sorted_tup] = combo

        return [ value for value in combinations ]
