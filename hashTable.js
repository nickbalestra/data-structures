var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

// Time complexity: O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var found = false;

  if (!bucket){
    bucket = [];
    this._storage.set(i, bucket);
  }

  bucket.forEach(function(tuple) {
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
    }
  })

  if (!found) {
    bucket.push([k,v]);
    this._count++;
    if (this._count > (this._limit * .75)) {
      this.resize(this._limit * 2)
    }
  }
  return true;
};

// Time complexity: O(1)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(i)) {
    return null;
  }

  var bucket = this._storage.get(i);
  var found = null;

  bucket.forEach(function(tuple){
    if (tuple[0] === k) {
      found = tuple[1];
    }
  });
  return found;
};

// Time complexity: O(1)
// Dynamic resizing doesn't affect amortized complexity of the hash table's operations
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._count

  if (!this._storage.get(i)) {
    return null;
  }

  var bucket = this._storage.get(i);
  bucket.forEach(function(tuple, index){
    if (tuple[0] === k) {
      bucket.splice(index, 1);
      this._count--;
      if (this._count < (this._limit * .25)) {
        this.resize(this._limit / 2);
      }
    }
  }.bind(this));
};

// Time complexity: O(n)
HashTable.prototype.resize = function(limit){
  var oldStorage = this._storage;
  this._limit = limit;
  this._storage = LimitedArray(limit);
  this._count = 0;

  oldStorage.each(function(bucket){
    if (bucket) {
      bucket.forEach(function(tuple){
        this.insert(tuple[0], tuple[1]);
      }.bind(this))
    }
  }.bind(this))
};
