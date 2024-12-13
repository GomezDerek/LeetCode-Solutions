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
                return ([], True)

            # recursive call(s)
            left_children = dfs(node.left)
            for child in left_children[0]:
                if child.val >= node.val:
                    return ([], False)

            right_children = dfs(node.right)
            for child in right_children[0]:
                if child.val <= node.val:
                    return ([], False)

            # return
            return [left_children[0] + right_children[0] + [node], True]

        left_children = dfs(root.left)
        if left_children[1] == False: return False
        for child in left_children[0]:
            if child.val >= root.val:
                return False

        right_children = dfs(root.right)
        if right_children[1] == False: return False
        for child in right_children[0]:
            if child.val <= root.val:
                return False

        # all tests passed
        return True