/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    //left -> root -> right
    var res = [];
    
    function handler(node) {
        if(!node) {
            return;
        }
        handler(node.left);
        res.push(node.val);
        handler(node.right);
    }
    
    handler(root);
    return res;
};