describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a("function");
    expect(doublyLinkedList.removeHead).to.be.a("function");
    expect(doublyLinkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);

    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);

    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it("should return true after new nodes are added", function(){
    var returned = doublyLinkedList.addToTail(4);
    expect(returned).to.equal(true);
  });

  it("should contain a value that was added", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('Nodes should contain a next previous properties', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head).to.have.property("next");
    expect(doublyLinkedList.head).to.have.property("previous");
    expect(doublyLinkedList.tail).to.have.property("next");
    expect(doublyLinkedList.tail).to.have.property("previous");    
  });

  it('Double linkage should be updated when new nodes are added', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.tail.previous).to.equal(null);

    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.tail.previous.value).to.equal(4);
  });

  it('Double linkage should be updated when removeHead is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    expect(doublyLinkedList.tail.previous.value).to.equal(4);
    expect(doublyLinkedList.tail.value).to.equal(5);

    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.head.previous).to.equal(null);
  });
  
});
