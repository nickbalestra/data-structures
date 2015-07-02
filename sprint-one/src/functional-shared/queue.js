var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

// To check why Queue.queueMethods brake the tests
var queueMethods = {
  enqueue:  function(value){
              this.storage[this.back++] = value;
            },
  dequeue:  function(){
              if (this.back > this.front) {
                var value = this.storage[this.front];
                delete this.storage[this.front++];
                return value;
              }
            },
  size:     function(){
              return this.back - this.front;
            }
};





