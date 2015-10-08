var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance._storage = {};
  someInstance._front = 0;
  someInstance._back = 0;
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
