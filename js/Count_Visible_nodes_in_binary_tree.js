  // Javascript program to count
// full nodes in a Binary Tree
// using Iterative approach
 
// Class to represent Tree node
class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
let root;
 
// Function to get the count of full
// Nodes in a binary tree
function getfullCount()
{
     
    // If tree is empty
    if (root == null)
        return 0;
       
    // Initialize empty queue.
    let queue = [];
       
    // Do level order traversal starting from root
    queue.push(root);
     
    // Initialize count of full nodes
    let count = 0;
     
    while (queue.length != 0)
    {
        let temp = queue.shift();
        if (temp.left != null && temp.right != null)
            count++;
 
        // Enqueue left child
        if (temp.left != null)
        {
            queue.push(temp.left);
        }
 
        // Enqueue right child
        if (temp.right != null)
        {
            queue.push(temp.right);
        }
    }
    return count;
}
 
// Driver code
/* 2
  / \
7     5
\     \
 6     9
/ \  /
1 11 4
Let us create Binary Tree as shown
*/
root = new Node(2);
root.left = new Node(7);
root.right = new Node(5);
root.left.right = new Node(6);
root.left.right.left = new Node(1);
root.left.right.right = new Node(11);
root.right.right = new Node(9);
root.right.right.left = new Node(4);
 
console.log(getfullCount());
 
// This code is contributed by rag2127
 