/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

/*
  & The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

  & Determine the maximum amount of money the thief can rob tonight without alerting the police.

  ~ Example 1:
    ~ Input: [3,2,3,null,3,null,1]

    ~      3
    ~     / \
    ~    2   3
    ~     \   \
    ~      3   1

    ~ Output: 7
      ~ Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

  ~ Example 2:
    ~ Input: [3,4,5,1,3,null,1]
    ~
    ~      3
    ~     / \
    ~    4   5
    ~   / \   \
    ~  1   3   1

    ~ Output: 9
      ~ Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

    ? Definition for a binary tree node.
    ? function TreeNode(val, left, right) {
    ?     this.val = (val===undefined ? 0 : val)
    ?     this.left = (left===undefined ? null : left)
    ?     this.right = (right===undefined ? null : right)
    ? }

    @param {TreeNode} root
    @return {number}
*/

const rob = (root) => {
  return caseHouses(root, false);
};

const caseHouses = (node, parentRobbed) => {
  if (node === null) {
    return 0;
  }

  // if the parent was robbed
  if (parentRobbed) {
    // we cannot rob this node
    return caseHouses(node.left, false) + caseHouses(node.right, false);
  }
  // if the parent was not robbed
  if (!parentRobbed) {
    // rob the current node
    const robNode =
      node.val + caseHouses(node.left, true) + caseHouses(node.right, true);
    // don't rob the current node
    const notRobNode =
      caseHouses(node.left, false) + caseHouses(node.right, false);
    // return the max of the two scenarios
    return Math.max(robNode, notRobNode);
  }
};
