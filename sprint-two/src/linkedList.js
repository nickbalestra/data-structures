var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value)
    this.head = this.head || newNode;

    if (this.tail){
      this.tail.next = newNode;
    }

    this.tail = newNode;
    return true;
  };

  list.removeHead = function(){
    var currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;
  };

  list.contains = function(target){
    var current = this.head;
    while(current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
