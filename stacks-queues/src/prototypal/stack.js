var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance._storage = {};
  someInstance._length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function(){
  return this._length;
}

stackMethods.push = function(value) {
  this._storage[this._length++] = value;
};

stackMethods.pop = function(){
  if (this.size()) {
    var value = this._storage[--this._length];
    delete this._storage[this._length]
    return value;
  }
};


