var mergeTwoLists = function (l1, l2) {
  let newNode = new ListNode(0);

  while (l1 || l2) {
    const node1 = l1.val;
    const node2 = l2.val;

    if (node1 && !node2) {
      newNode.next = l1;
    }
    if (node2 && !node1) {
      newNode.next = l2;
    }
    if (node1 && node2) {
      if (node1.val > node2.val) {
        newNode.next = l2;
        newNode.next = l1;
      } else {
        newNode.next = l1;
        newNode.next = l2;
      }
    }
    l1 = l1.next;
    l2 = l2.next;
  }

  return newNode;
};

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

function mergeLinkedList(l1, l2) {
  let temp_node = new ListNode(0);
  let current_node = temp_node; 
  console.log("linkedlist", temp_node);

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current_node.next = l1;
      l1 = l1.next;
    } else {
      current_node.next = l2;
      l2 = l2.next;
    }
    current_node = current_node.next;
  }
  if (l1 != null) {
    current_node.next = l1;
    l1 = l1.next;
  }
  if (l2 != null) {
    current_node.next = l2;
    l2 = l2.next;
  }
  console.log("linkedlist", temp_node.next);
  return temp_node.next;
}

mergeLinkedList([1,2,4],[1,3,4]);
