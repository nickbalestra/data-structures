var Stack = function() {
  this._storage = {};
  this._length = 0;
};

Stack.prototype.push = function(value){
  this._storage[this._length++] = value;
};

Stack.prototype.pop = function() {
  if (this.size()) {
    var value = this._storage[this._length - 1];
    delete this._storage[this._length--];
    return value;
  }
};

Stack.prototype.size = function() {
  return this._length;
}