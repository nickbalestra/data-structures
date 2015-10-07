var Graph = function(){

  this.nodes = {};

};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node){
  if(this.nodes[node]) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.nodes[fromNode][toNode]) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = false;
  this.nodes[toNode][fromNode] = false;
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes){
    cb(key)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



