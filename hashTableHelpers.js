// This class represents an array with limited functionality and a maximum size.
// It will ensure that we don't accidentally try to use up too much space.
//
// Usage:
// limitedArray.set(3, 'hi');
// limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};

  // Time complexity: O(1)
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };

  // Time complexity: O(1)
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  
  // Time complexity: O(n)
  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

// This is the "hashing function".
// It turns any string into an integer that is well-distributed between the
// numbers 0 and `max`
// Time complexity: O(1)
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
