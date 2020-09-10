// stephen linkedlist
function circular(list) {
    let a = list.head;
    let b = list.head;
    let i = 0;
  
    while (b.next && b.next.next) {
      a = a.next;
      b = b.next.next;
      if (a === b) return true;
    }
    return false;
  }