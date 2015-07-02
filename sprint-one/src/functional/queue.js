var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[back++] = value;
  };

  someInstance.dequeue = function(){
    if (back > front) {
      var value = storage[front];
      delete storage[front++]
      return value;
    }
  };

  someInstance.size = function(){
    return back - front ;
  };

  return someInstance;
};