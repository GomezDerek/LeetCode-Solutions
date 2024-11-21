# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        # edge cases
            # empty BST ?

        # strategy
        # get ancestry paths for each node
        # find first LCA in each ancestry paths


        def get_path(node, target):
            arr = []

            while(node.val != target):
                arr.append(node.val)
                if node.val < target:
                    node = node.right
                elif node.val > target:
                    node = node.left
            
            arr.append(node.val)
            return arr

        p_path = get_path(root, p.val)
        q_path = get_path(root, q.val)

        # print(p_path)
        # print(q_path)

        LCA = root.val
        for i in range( min(len(p_path), len(q_path)) ):
            if( p_path[i] == q_path[i] ):
                LCA = (q_path[i])
            else:
                break
        
        return TreeNode(LCA)