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
var increasingBST = function (root) {
  let nodeValues = [];

  const traverseTree = (node) => {
    if (node === null) {
      return node;
    }
    traverseTree(node.left);
    nodeValues.push(node.val);
    traverseTree(node.right);
  };
  traverseTree(root);

  let orderedTree = new TreeNode(0);
  let current = orderedTree;

  for (let i = 0; i < nodeValues.length; i++) {
    current.right = new TreeNode(nodeValues[i]);
    current = current.right;
  }
  return orderedTree.right;
};
