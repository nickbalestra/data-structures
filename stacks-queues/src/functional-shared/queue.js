var Queue = function(){
  var someInstance = {};
  someInstance._storage = {};
  someInstance._front = 0;
  someInstance._back = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {
  
  enqueue: function(value) {
    this._storage[this._back++] = value;
  },

  dequeue: function() {
    if (this.size()) {
      var value = this._storage[this._front];
      delete this._storage[this._front++];
      return value;
    }
  },

  size: function() {
    return this._back - this._front;
  }
};