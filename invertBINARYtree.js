/* write a function that takes in a binary tree and inverts it...it should swap every left node for its corresponding right node. 

sample input=
            1
            /\
          2   3
        /\    /\
       4  5  6  7 
sample output = 
            1
            /\
           3  2
          /\  /\
        7  6 5  4 
*/
//O(N) Time O(N) Space. Where N=number of nodes, will take N time to vist N nodes but not creating any new storage structures. 
function invertBinaryTree(tree) {
//set up our queue which is an array. Will put tree in to start which is the root. 
   const queue=[tree]
   //as long as array has a value, will run this while loop where we pull the first value (via shift function) and swap left for right via helper function. 
   while(queue.length >0){
       //use shift not pop to get first value in queue array 
        let current = queue.shift()
        //checks if this value is null, if null continue swapping null values and pushing null values into queue array. Once all values in queue are null will kick out of while loop. 
        if(current===null){
            continue
        }
        //calls on helper function below and feeds current node into it. 
        swapLeftAndRight(current)
        //then we add the children nodes to the queue array. We then do this while loop again first with the left and then with the right until all values are null and then while loop kicks out and we have finsihed traversing the tree. 
        queue.push(current.left)
        queue.push(current.right)
   }
  }

  function swapLeftAndRight(current){
      //feeds in current node. We use a temp variable to hold one of the values and swap. 
      let temp=current.left 
      current.left=current.right
      current.right = temp 
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  