/* write a fnction that takes in BT and returns its diameter. The diameter is defined as the length of its longest path, even if that path doesnt pass through the root of the tree...A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. The length of a path is the number of edges between the path's first node and its last node. */

/*sample input= 1
                /\
               3  2
              /\  
             7  4
            /    \
           8      5
          /        \
        9           6
sample output= 6. 9->8->7->3->4->5->6....there are six edges between the first node and the last node of the tree's longest path */

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
//easier to return a class than a variable, akes code cleaner and easier to read. Can access the diameter or height directly. 
  class TreeInfo{
    constructor(diameter, height){
        this.diameter=diameter
        this.height=height
    }
}
//
function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter 
  }

function getTreeInfo(tree){
    //if tree is none, it is empty so dont need to recursively call through it. Just return empty. 
    if (tree===null){
        return new TreeInfo(0,0)
    }

    //recursively calls both left and right until base case met. 
    const leftTreeInfo = getTreeInfo(tree.left)
    const rightTreeInfo = getTreeInfo(tree.right)

    //height will add as recursive calls complete. then we add left and right together to get longest PATH. 
    const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height
    //As recursive calls are made, will compare Left and right and continue to take MAX 
    const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter)
    //will compare max diameter so far to longest path through root 
    const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar)
    //will continue to increment height as recursive calls are made.
    const currentHeight = 1 + Math.max(leftTreeInfo.height , rightTreeInfo.height)

    //returns as an instance of an object the MAX value for current height and diameter. 
    return new TreeInfo (currentDiameter, currentHeight)
}
