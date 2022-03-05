/*BST Traversal write three functions that take in a BST and an empty array, traverse the BST adding the node values to the empty array in specific order and then returning that array. The three functions should traverse the BST using the in-order, pre-order, and post-order tree traversal */

//***ALL ARE DEPTH FIRST   */
//SPACE-TIME-COMPLEXITY= O(N) Time where N is number of nodes, O(N) Space, or O(d) where d=depth. Because every depth adds to call stack, has to load all call stacks before recursive function returns back on itself. 


//LEFT, ROOT, RIGHT 
//when tree = null you are at the end and condition not met...this is edge case to break recursive calls 
function inOrderTraverse(tree, array) {
   if(tree !== null){
    //will recursively call down to left most branch, then adds this value to array there will be no right at the end...goes up one node adds it to array and then could go right. goes up another node adds it and then the right. 
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array 
}
  
  //ROOT, LEFT, RIGHT 
  function preOrderTraverse(tree, array) {
    if(tree !==null){
        array.push(tree.value)
        preOrderTraverse(tree.left, array )
        preOrderTraverse(tree.right, array)
      }
      return array 
  }
  
  //LEFT, RIGHT, ROOT 
  function postOrderTraverse(tree, array) {
    if(tree !==null){
        postOrderTraverse(tree.left, array)
        postOrderTraverse(tree.right, array)
        array.push(tree.value)
      }
      return array 
  }