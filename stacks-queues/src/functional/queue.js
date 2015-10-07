var Queue = function(){
  var someInstance = {};
  var back = 0;
  var front = 0;
  var storage = {};

  someInstance.enqueue = value => {
    someInstance[back++] = value;
  };

  someInstance.dequeue = () => {
    if (back > front) {
      var value = someInstance[front];
      delete someInstance[front++];
      return value;
    }
  };

  someInstance.size = () => {
    return back - front;
  };

  return someInstance;
};
