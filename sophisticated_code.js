/* 
Filename: sophisticated_code.js
Content: Implementation of a complex data structure - a binary search tree (BST) with various operations.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }
    if (!found) return false;
    return current;
  }

  breadthFirstSearch() {
    const queue = [];
    const visited = [];
    let current = this.root;
    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return visited;
  }

  depthFirstPreOrder() {
    const visited = [];
    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return visited;
  }

  depthFirstInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return visited;
  }

  depthFirstPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };

    traverse(this.root);
    return visited;
  }

  remove(value) {
    const removeNode = function(node, value) {
      if (!node) return null;
      if (value === node.value) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
      } else {
        node.right = removeNode(node.right, value);
      }
      return node;
    };

    this.root = removeNode(this.root, value);
  }

  // Other BST operations like minimum/maximum value, height, etc. can be added here...
}

// Example usage of the BinarySearchTree class
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst.breadthFirstSearch()); // Output: [5, 3, 7, 2, 4, 6, 8]
console.log(bst.depthFirstPreOrder()); // Output: [5, 3, 2, 4, 7, 6, 8]
console.log(bst.depthFirstInOrder()); // Output: [2, 3, 4, 5, 6, 7, 8]
console.log(bst.depthFirstPostOrder()); // Output: [2, 4, 3, 6, 8, 7, 5]

bst.remove(4);
console.log(bst.depthFirstInOrder()); // Output: [2, 3, 5, 6, 7, 8]
