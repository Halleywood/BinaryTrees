/* write a function that takes in a potentially invalid BST and returns a boolean if it is legit or not. Right values must be strictly greater than values on left! */

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    // tstarting at the top, we compare the root node to infinity and -inf because it is the root. In the helper function we then recursively call the tree.left and tree.right feeding THIS ROOT VALUE as the mex for the left and the min for the right. 

    //As the recursive calls continue, tree.left and tree.right replace current node until condtion is not met and returns false OR you reach bottom of tree and node===null which will return true. 
    return validateHelper(tree, -Infinity, Infinity)
}

//helper function, starts with infinity and -infinity because first node cant be greater/less than any value. 
function validateHelper(tree, minValue, maxValue) {
    //either the tree is empty and therefore valid, OR you have come to the end of a tree and node= null and your false statements havent been met so you have a valid tree. 
    if (tree === null) {
        return true
    }
    //
    if (tree.value < minValue || tree.value >= maxValue) {
        return false
    }
    //we then recursively call the next nodes, feeding in the left and right nodes. For th Left node, we set out current tree.value as the MAX because anything to the left should be LESS THAN THIS VALUE. For the tree.right, we feed our current value as the MIN VALUE because anything to the right should be GREATER THAN THIS VALUE. 
    let leftValid = validateHelper(tree.left, minValue, tree.value)
    let rightValid = validateHelper(tree.right, tree.value, maxValue)

    return leftValid && rightValid
}