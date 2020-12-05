/* eslint-disable consistent-return */
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
 * @return {TreeNode}
 */
const increasingBST = (root) => {
  const nodeValues = [];

  const traverseTree = (node) => {
    if (node === null) {
      return node;
    }
    traverseTree(node.left);
    nodeValues.push(node.val);
    traverseTree(node.right);
  };
  traverseTree(root);

  // eslint-disable-next-line no-undef
  const orderedTree = new TreeNode(0);
  let current = orderedTree;

  for (let i = 0; i < nodeValues.length; i += 1) {
    // eslint-disable-next-line no-undef
    current.right = new TreeNode(nodeValues[i]);
    current = current.right;
  }
  return orderedTree.right;
};
