var Tree = function(value){
  var newTree = {};
  
  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

// Time complexity: O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
  return true;
};

// Time complexity: O(n)
treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  return this.children.some( child => child.contains(target));
};
