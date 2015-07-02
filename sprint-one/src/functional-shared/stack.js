var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.length = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

// To check why Stack.stackMethods brake the tests
var stackMethods = {
  size: function(){
          return this.length;
        },
  pop:  function(){
          if (this.length > 0) {
            var value = this.storage[--this.length];
            delete this.storage[this.length];
            return value;
          }
        },
  push: function(value){
          this.storage[this.length++] = value;
        }
};


