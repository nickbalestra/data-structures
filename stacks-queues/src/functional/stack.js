var Stack = function(){
  var someInstance = {};
  var length = 0;
  var storage = {};

  someInstance.push = value => {
    someInstance[length++] = value;
  };

  someInstance.pop = () => {
    if (length) {
      var value = someInstance[--length];
      delete someInstance[length];
      return value;      
    }
  };

  someInstance.size = () => {
    return length;
  };

  return someInstance;
};
