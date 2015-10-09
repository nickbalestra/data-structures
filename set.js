var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// Time complexity: O([].indexOf), O(n) 
setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

// Time complexity: O([].indexOf), O(n) 
setPrototype.contains = function(item) {
  return this._storage.indexOf(item) >= 0;
};

// Time complexity: O([].indexOf), O(n) 
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var itemAt = this._storage.indexOf(item);
    this._storage.splice(itemAt, 1);
  }
};
