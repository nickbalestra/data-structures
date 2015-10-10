var BinarySearchTree = function(value){
  bst = Object.create(BinarySearchTree.prototype);

  bst._value = value;
  bst._left = null;
  bst._right = null;

  return bst;
};

// Time complexity: O(log(n))
BinarySearchTree.prototype.insert = function(value) {
  if (value > this._value) {
    if (!this._right) {
      this._right = BinarySearchTree(value);
      return true;
    } else {
      return this._right.insert(value);
    }
  }

  if (value < this._value) {
    if (!this._left) {
      this._left = BinarySearchTree(value);
      return true;
    } else {
      return this._left.insert(value);
    }
  }
};

// Time complexity: O(log(n))
BinarySearchTree.prototype.contains = function(target) {
  if (this._value === target) {
    return true;
  }

  if (this._right && target > this._value) {
    return this._right.contains(target);
  } 

  if (this._left && target < this._value) {
    return this._left.contains(target);
  }
  
  return false;
};

// Time complexity: O(n)
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  if (this._value) {
    cb(this._value);
  }
  if (this._right) {
    this._right.depthFirstLog(cb);
  }
  if (this._left) {
    this._left.depthFirstLog(cb);
  }
};
