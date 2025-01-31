/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getHeight(root) >= 0;
};

var getHeight = function(node) {
    // base case
    if (!node) {
        return 0;
    }
    
    // recursive calls
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);

    if (leftHeight == -1 || rightHeight == -1) {
        return -1;
    }
    else if ( Math.abs(leftHeight - rightHeight) > 1 ) {
        return -1;
    }
    else {
        return leftHeight > rightHeight ? leftHeight+1 : rightHeight+1;
    }
}