describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree._left._right._value).to.equal(3);
    expect(binarySearchTree._right._left._value).to.equal(6);
  });

  it('should return true when appending a value to the tree', function(){
    var returned = binarySearchTree.insert(2);
    expect(returned).to.equal(true);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree._left._value).to.eql(2);
    expect(binarySearchTree._right).to.eql(null);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.depthFirstLog(func);
    // BST should look something like this
    //
    //          5
    //       2  -  6
    //     1 - 3   - 7
    //         - 4
    //
    // If we walk the tree in depth first way we should expect something like [ 5, 2, 1, 3, 4, 6, 7 ]
    expect(array).to.eql([ 5, 2, 1, 3, 4, 6, 7 ]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree._left._value).to.eql(2);
    expect(binarySearchTree._right).to.eql(null);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.breadthFirstLog(func);
    // BST should look something like this
    //
    //          5
    //       2  -  6
    //     1 - 3   - 7
    //         - 4
    //
    // If we walk the tree in depth first way we should expect something like [ 5, 2, 6, 1, 3, 7, 4 ]
    expect(array).to.eql([ 5, 2, 6, 1, 3, 7, 4 ]);
  });


});
