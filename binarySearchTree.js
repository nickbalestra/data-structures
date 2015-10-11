var BinarySearchTree = function(value){
  bst = Object.create(BinarySearchTree.prototype);

  bst._value = value;
  bst._left = null;
  bst._right = null;

  return bst;
};

// Time complexity: O(log(n))
BinarySearchTree.prototype.insert = function(value) {
  if (value < this._value) {
    if (!this._left) {
      this._left = BinarySearchTree(value);
      return true;
    } else {
      return this._left.insert(value);
    }
  }

  if (value > this._value) {
    if (!this._right) {
      this._right = BinarySearchTree(value);
      return true;
    } else {
      return this._right.insert(value);
    }
  }
};

// Time complexity: O(log(n))
BinarySearchTree.prototype.contains = function(target) {
  if (this._value === target) {
    return true;
  }

  if (this._left && target < this._value) {
    return this._left.contains(target);
  }

  if (this._right && target > this._value) {
    return this._right.contains(target);
  } 
  
  return false;
};

// Time complexity: O(n)
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // Using a stack to walk the tree in depth first way 
  // Could be done with arrays and native methods in js, but as we have the
  // class defined in `stacks-queues/src/prototypal/stack.js`, let's use it
  var container = Stack(); 
  var element;

  container.push(this);
  while (container.size() > 0) {  
    element = container.pop();

    if (element._right) {
      container.push(element._right);
    }
    if (element._left) {
      container.push(element._left);
    }
    cb(element._value);
  }    
};

// Recursive DFS Implementation
// BinarySearchTree.prototype.depthFirstLog = function(cb) {
//   cb(this._value);
//   if (this._left) {
//     this._left.depthFirstLog(cb);
//   }
//   if (this._right) {
//     this._right.depthFirstLog(cb);
//   }
// };

// Time complexity: O(n)
BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  // / Using a queue to walk the tree in breadth first way 
  // Could be done with arrays and native methods in js, but as we have the
  // class defined in `stacks-queues/src/prototypal/queue.js`, let's use it
  var container = Queue(); 
  var element;

  container.enqueue(this);
  while (container.size() > 0) {  
    element = container.dequeue();
    if (element._left) {
      container.enqueue(element._left);
    }
    if (element._right) {
      container.enqueue(element._right);
    }
    cb(element._value);
  }
};
