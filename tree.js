var Tree = function(value){
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

// Time complexity: O(1)
treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
  return true;
};

// Time complexity: O(n)
treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  return this.children.some( child => child.contains(target));
};

// Time complexity: O(n)
treeMethods.removeFromParent = function(target){
  var branched = undefined;

  if (this.value === target) {
    this.parent.children = this.parent.children.filter(child => child.value !== target);
    this.parent = null;
    branched = this;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      return this.children[i].removeFromParent(target);
    } 
  }

  return branched;
};

// Time complexity: O(n)
treeMethods.traverse = function(cb){
 cb(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  } 
}