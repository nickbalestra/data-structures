var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: O(1)
  list.addToTail = function(value){
    var node = Node(value);
    this.head = this.head || node;
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return true;
  };

  // Time complexity:  O(1)
  list.removeHead = function(){
    var head = this.head;
    this.head = this.head.next;
    return head.value;
  };

  // Time complexity: O(n)
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