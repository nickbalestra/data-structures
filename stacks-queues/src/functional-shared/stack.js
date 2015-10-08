var Stack = function() {
  var someInstance = {};
  someInstance._storage = {};
  someInstance._length = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  
  pop: function() {
    if (this.size()) {
      var value = this._storage[this._length - 1];
      delete this._storage[this._length--];
      return value;
    }
  },

  push: function(value) {
    this._storage[this._length++] = value; 
  },

  size: function() {
    return this._length;
  }
};
