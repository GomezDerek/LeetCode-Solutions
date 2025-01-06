# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # strategy
        # DFS traversal to both nodes
        # record the paths to each node
        # find LCA by comparing paths
            # LCA found by the last shared node in path

        # RESTRATEGY (I realized the tree is not balanced)
        # BFS traversal
        # record paths to EVERY node with a hashmap
        # once both targets have been found, end traversal
        # find LCA by comparing paths
            # LCA found by the last shared node in path

        queue = collections.deque()
        queue.append( [root, []] )
        paths = {}

        while queue:
            node, path = queue.popleft()
            if node:
                # print(node.val, path)
                newPath = path + [node]
                paths[node] = newPath
                # paths[node.val] = newPath
                queue.append([node.left, newPath])
                queue.append([node.right, newPath])
            else:
                # print(None, path)
                continue

            
        # find LCA by comparing paths

        pPath = paths[p]
        qPath = paths[q]
        # pPath = paths[p.val]
        # qPath = paths[q.val]
        # print(pPath, qPath)
        pPath.reverse()
        qPath.reverse()
        # print(pPath, qPath)

        for pNode in pPath:
            for qNode in qPath:
                # print(pNode, qNode)
                if pNode.val == qNode.val:
                    return pNode