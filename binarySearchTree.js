var BinarySearchTree = function(value){
  bst = Object.create(BinarySearchTree.prototype);

  bst._value = value;
  bst._left = null;
  bst._right = null;
  bst._root = arguments[1] || false;

  return bst;
};

// Time complexity: O(log(n))
BinarySearchTree.prototype.insert = function(value) {  
    if (value < this._value) {
      if (!this._left) {
        this._left = BinarySearchTree(value);
      } else {
        this._left.insert(value);
      }
    }

    if (value > this._value) {
      if (!this._right) {
        this._right = BinarySearchTree(value);
      } else {
        this._right.insert(value);
      }
    }
    
    if (this._root){
      this.rebalance();
    }
    return true;
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
  // Using a queue to walk the tree in breadth first way 
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

// tree balancing stuff here
// Time complexity: O(n)
BinarySearchTree.prototype.findHeight = function() {
  if (!this._left && !this._right) {
    return -1;
  }

  var lefth = 0;
  var righth = 0;

  if (this._left) { 
    lefth = this._left.findHeight() 
  };
  
  if (this._right) { 
    righth = this._right.findHeight()
  };

  return (lefth > righth) ? lefth + 1 : righth +1;
};

// balanceFactor = height(left subtree) - height(right subtree)
// Time complexity: O(n)
BinarySearchTree.prototype.balanceFactor = function() {
  if (!this._left && !this._right) {
    return -1;
  }

  var lefth = 0;
  var righth = 0;

  if (this._left) { 
    lefth = this._left.findHeight() 
  };
  
  if (this._right) { 
    righth = this._right.findHeight()
  };

  return (lefth + 1) - (righth + 1);
};

// Time complexity: O(1)
BinarySearchTree.prototype.rotateRight = function() {
  var newRight = BinarySearchTree(this._value);
  newRight._right = this._right;
  newRight._left = this._left._right;
  this._right = newRight;

  this._value = this._left._value;
  if (this._left._root) {
    this._root = true;
    this._left._root = false;
  }
  this._left = this._left._left;
};

// Time complexity: O(1)
BinarySearchTree.prototype.rotateLeft = function() {
  var newLeft = BinarySearchTree(this._value);
  newLeft._left = this._left;
  newLeft._right = this._right._left;
  this._left = newLeft;

  this._value = this._right._value;
  if (this._right._root) {
    this._root = true;
    this._right._root = false;
  }
  this._right = this._right._right;
};

// Time complexity: O(n)
BinarySearchTree.prototype.rebalance = function() {
  if (this.balanceFactor() > 1) {
    this.rotateRight();
  }
  if (this.balanceFactor() < -1) {
    this.rotateLeft();
  }
}

