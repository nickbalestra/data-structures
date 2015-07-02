var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance._storage = {};
  someInstance._front = 0;
  someInstance._back = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._back++] = value;
};

queueMethods.dequeue = function() {
  if (this.size()) {
    var value = this._storage[this._front];
    delete this._storage[this._front++];
    return value;
  }
};

queueMethods.size = function() {
  return this._back - this._front;
};







