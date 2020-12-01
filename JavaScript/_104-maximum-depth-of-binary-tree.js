/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// @ts-nocheck
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
 * @return {number}
 */
const maxDepth = (root) => {
  // if root is empty
  if (!root) {
    // depth is 0;
    return 0;
  }
  // traverse left nodes and add 1 at each depth
  const leftDepth = 1 + maxDepth(root.left);
  // traverse right nodes and add 1 at each depth
  const rightDepth = 1 + maxDepth(root.right);
  // return the max depth of left and right nodes
  return Math.max(leftDepth, rightDepth);
};
