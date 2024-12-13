# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        # recursive DFS

        def dfs(node):
            # base case(s)
            if not node:
                return {"min_val": None, "max_val": None, "valid": True}

            # recursive call(s)
            left = dfs(node.left)
            if left["valid"] is False: return left
            if left["max_val"] is not None and left["max_val"] >= node.val:
                return {"min_val": None, "max_val": None, "valid": False}

            right = dfs(node.right)
            if right["valid"] is False: return right
            if right["min_val"] is not None and right["min_val"] <= node.val:
                return {"min_val": None, "max_val": None, "valid": False}

            # return
            return {
                "min_val": node.val if left["min_val"] is None else left["min_val"],
                "max_val": node.val if left["max_val"] is None else right["max_val"],
                "valid": True
            }

        return dfs(root)["valid"]