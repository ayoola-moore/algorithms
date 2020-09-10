// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

function RemoveDuplicate(head) {
    let start = head;
    if (!start) {
      return start;
    }
    while (start.next) {
      if (start.val === start.next.val) {
        start.next = start.next.next;
        continue;
      }
      start = start.next;
    }
    return head;
  }