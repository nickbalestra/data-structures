var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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