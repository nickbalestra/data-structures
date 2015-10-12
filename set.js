var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set._length = 0;
  return set;
};

var setPrototype = {};

// Time complexity: O(1) 
setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
    this._length++;
  }
};

// Time complexity: O([].indexOf), O(n) 
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

// Time complexity: O([].indexOf), O(n) 
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
    this._length--;
  }
};
