var Queue = function() {
  this._storage = {};
  this._front = 0;
  this._back = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._back++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.size()) {
    var value = this._storage[this._front];
    delete this._storage[this._front++];
    return value;
  }
};

Queue.prototype.size = function() {
  return this._back - this._front;
};