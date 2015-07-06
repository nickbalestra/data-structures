var BinarySearchTree = function(value){
  var newbsTree = Object.create(bsMethods);
  newbsTree._value = value;
  newbsTree._left = null;
  newbsTree._right = null;

  return newbsTree;
};

var bsMethods = {};

bsMethods.insert = function(value) {
  if (value < this._value) {
    if (this._left === null) {
      this._left = BinarySearchTree(value);
    } else {
      this._left.insert(value);
    }
  } else {
    if (this._right === null) {
      this._right = BinarySearchTree(value);
    } else {
      this._right.insert(value);
    }
  }
  return true;
};

bsMethods.contains = function(target) {
  if (this._value === target) {
    return true;
  }

  if (this._left !== null) {
    if (this._left.contains(target)) {
      return true;
    }
  }

  if (this._right !== null) {
    if (this._right.contains(target)) {
      return true;
    }
  }

  return false;

};

bsMethods.depthFirstLog = function(callback) {
  if (this._value !== null) {
    callback(this._value);
  }
  if (this._right !== null) {
    this._right.depthFirstLog(callback);
  }
  if (this._left !== null) {
    this._left.depthFirstLog(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
