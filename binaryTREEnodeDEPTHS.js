/* the distance between a node in a Binary Tree and the tree's root is called the node's depth. Write a function that takes in a BT and returns the SUM OF ITS NODES' DEPTHS.  Each BT node has an integer value, a left child node, and a right child node. Children nodes can either be BT nodes themselves or none/null. 
*/
/* sample input= 
tree =  1
       /\
      2  3
     /\  /\
    4  5 6 7
   /\
  8  9

  sample output= 16, the depth of node 2 is 1 and node 3 is 1...the depth of 4,5,6,7 are all 2...the depth of 8 and 9 is 3
  so 1+1+2+2+2+2+3+3=16. 
  */

  function nodeDepths(root) { 
    //as we visit a node in the tree we will store it and its depth so we are using an objct, storing as an array with length of 2 for left and right 
    const stack=[{node: root, depth: 0}]
    //keep track of our total sum 
    let totalSum=0
    while(stack.length > 0){
      const {node, depth} = stack.pop();
      //by putting this check first dont have to do seperate left and right check. 
      if(node === null){
          continue
      }
      //add current depth of node to running sum 
      totalSum+= depth 
      //push any left or right nodes to stack object, then if there are nodes while loop will continue, incremented depth. once they equal null there will be nothing to add to stack and while loop will end. 
      stack.push({node: node.right, depth: depth+1})
    }
    return totalSum
  }
  
  /*RECURSIVE*/ 
//   function nodeDepths(root, depth=0) { 
//     if(root===null){
//         return 0;
//     }
//     return depth+ nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1)
//   }



  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  