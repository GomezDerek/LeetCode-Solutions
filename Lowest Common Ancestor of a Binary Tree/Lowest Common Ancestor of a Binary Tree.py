# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # STRATEGY
        # consider the tree is not balanced
        # BFS traversal
            # record paths to EVERY node with a hashmap
            # once both targets have been found, end traversal
        # find LCA by comparing paths
            # LCA found by the last shared node in path

        queue = collections.deque()
        queue.append( [root, []] )
        paths = {}
        pFound, qFound = False, False

        # end traversal early when both targets have been found
        while queue or not pFound or not qFound:
            node, path = queue.popleft()

            # base case
            # skip this node if null
            if not node:
                continue
            
            else:
                newPath = path + [node] # update path
                paths[node] = newPath   # add node's path to hashmap
                
                if node.val == p.val:
                    pFound = True
                elif node.val == q.val:
                    qFound = True

                queue.append([node.left, newPath])
                queue.append([node.right, newPath])
                        
        # find LCA by comparing paths
        pPath = paths[p]
        qPath = paths[q]
        pPath.reverse()
        qPath.reverse()

        for pNode in pPath:
            for qNode in qPath:
                if pNode.val == qNode.val: 
                    return pNode