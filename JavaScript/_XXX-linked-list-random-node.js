/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */

Solution.prototype.getRandom = function () {
  let node = this.head;
  let result = node.val;

  for (let n = 2; node.next !== null; n++) {
    node = node.next;
    if (Math.floor(Math.random() * n) === 0) {
      result = node.val;
    }
  }
  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

Solution.prototype.getRandom = function () {
  let n = 2;
  let node = this.head.next;
  let result = this.head.val;

  while (node) {
    const randomCheck = 1 / n;
    if (Math.random() <= randomCheck) {
      result = node.val;
      n += 1;
      node = node.next;
    }
  }
  return result;
};
