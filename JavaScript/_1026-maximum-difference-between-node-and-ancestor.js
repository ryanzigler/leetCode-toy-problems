/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/*
& Given the root of a binary tree, find the maximum value V for which there exist different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.

& A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.

~ Example 1:

~   Output: 7
~   Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
~   Explanation: We have various ancestor-node differences, some of which are given below:

~   |8 - 3| = 5
~   |3 - 7| = 4
~   |8 - 1| = 7
~   |10 - 13| = 3

~   Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

~ Example 2:
~  Input: root = [1,null,2,null,0,3]
~  Output: 3

! Constraints:
  ! The number of nodes in the tree is in the range [2, 5000].
  ! 0 <= Node.val <= 105

? Definition for a binary tree node:
?   function TreeNode(val, left, right) {
?     this.val = (val===undefined ? 0 : val)
?     this.left = (left===undefined ? null : left)
?     this.right = (right===undefined ? null : right)
?   }

@param {TreeNode} root
@return {number}
*/
const maxAncestorDiff = (root) => {
  if (root === null) {
    return 0;
  }

  let result = 0;

  const dfs = (node, max, min) => {
    if (node === null) {
      result = Math.max(result, max - min);
      return;
    }

    max = Math.max(root.val, max);
    min = Math.min(root.val, min);

    dfs(node.left, max, min);
    dfs(node.right, max, min);
  };

  dfs(root, root.val, root.val);
  return result;
};
