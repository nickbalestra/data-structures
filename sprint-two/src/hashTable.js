var HashTable = function(){
  // IDEA for refacotr improvements, optional parameter for the resizing bounce (ie .65 - .35)
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var didWeFind = false;

  if (!bucket){
    bucket = [];
    this._storage.set(i, bucket);
  }

  _.each(bucket, function(tuple){
    if(tuple[0] === k){
      tuple[1] = v;
      didWeFind = true;
    }
  })

  if(!didWeFind){
    bucket.push([k,v]);
    this._count++;
    if(this._count > (this._limit * .75)){
      this.resize(this._limit*2)
    }
  }
  return true;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check the storage at the index i
  // if there is nothing we return false
  if (!this._storage.get(i)) {
    return null;
  }

  // else we should iterate trhough the bucket
  var bucket = this._storage.get(i);

  // because we use each to iterate trough the bucket we need a variable to hold the found value
  var whatDidWeFind = null;

  _.each(bucket, function(tuple){
    // for each tuple check if the tuple[0] is equel to our key
    if (tuple[0] === k) {
      // if match we should return the value
      whatDidWeFind = tuple[1];
    }
  });
  // if we didnt find it anywhere in the bucket we should retunr null somehow (see tests)
  return whatDidWeFind;
};

HashTable.prototype.remove = function(k){
  //run the hash on the key
  var i = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._count
  //check storage at that key
  //if nothing return false
  if(!this._storage.get(i)){
    return null;
  }

  var bucket = this._storage.get(i);
  for (var index = 0; index < bucket.length; index++) {
    if(bucket[index][0] === k) {
      bucket.splice(index, 1);
      this._count--;
      if(this._count < (this._limit * .25)) {
        this.resize(this._limit / 2);
      }
    }
  };
};


HashTable.prototype.resize = function(limit){
  var oldStorage = this._storage;
  this._limit = limit;
  this._storage = LimitedArray(limit);
  this._count = 0;

  var context = this;

    // for each element of the old this._storage we need to add it on the new limitedArray
    oldStorage.each(function(bucket){

      if(!bucket) {
        return;
      }
      for (var i = 0; i < bucket.length; i++) {
        context.insert(bucket[i][0], bucket[i][1]);
      };
    })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */