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
   * @return {number[][]}
   * 
   */

  // var levelOrder = function(root) {
  //   // sanity check
  //   if(!root) return [];
  //   const result = [];
  //   const queue = [];
    
  //   queue.push([root, 0]);
    
  //   while(queue.length) {
  //       // gen stands for generation
  //       const [node, gen] = queue.shift();
  //       if(!result[gen]) result[gen] = [node.val];
  //       else result[gen].push(node.val);
        
  //       if(node.left) queue.push([node.left, gen+1]);
  //       if(node.right) queue.push([node.right, gen+1]);
  //   }
  //   return result;
  // };


  var levelOrder = function(root) {
    if (!root) {
      return [];
    }
    
    let table = {};
  
  let helper = (node, level) => {
    if (!node) {
      return;
    }
    
    if (table.hasOwnProperty(level)) {
      table[level].push(node.val);
    } else {
      table[level] = [node.val];
    }
    
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  
  helper(root, 0);
  return Object.values(table);
}