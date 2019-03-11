'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  preOrder = (tree) => {

    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(tree.root);

    return results;
  } 

  postOrder = (tree) => {

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }
    _walk(tree.root);

    return results;
  };

  inOrder = (tree) => {

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    }
    _walk(tree.root);

    return results;

  }

  levelOrder = (tree) => {

    let results = [];
    let nodeQueue = [];

    nodeQueue.push(tree.root);

    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if (current.left) nodeQueue.push(current.left);
      if (current.right) nodeQueue.push(current.right);
    }

    return results;
  }

}

module.exports = { BinaryTree, Node };

