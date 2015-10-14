// The BloomFilter contstructor expects 2 things; m, which is the number of
// positions in the filter data set, and an array of hashing functions.
var BloomFilter = function(m, hashingFunctions) {

  this._storage = new BitArray(m);
  this._hashingFunctions = hashingFunctions;
};

BloomFilter.prototype.add = function(value){
  this._hashingFunctions.forEach(fn => {
    this._storage.flipOn(fn(this._storage.length, value));
  });
};

BloomFilter.prototype.test = function(value){
  return this._hashingFunctions.every(fn =>
    this._storage.check(fn(this._storage.length, value))); 
};
