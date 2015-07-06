var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
  return true;
};

treeMethods.contains = function(target){

  if (this.value === target) {
    return true;
  }


 for (var i = 0; i < this.children.length; i++) {
   if(this.children[i].contains(target)){
     console.log('true');
     return true;
   }
 }

  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
