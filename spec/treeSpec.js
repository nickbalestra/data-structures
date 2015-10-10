describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true when adding a children to the three', function(){
    var returned = tree.addChild(5);
    expect(returned).to.equal(true);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });


  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have a method named "removeFromParent" and a property named "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('If tree is a child it should refer to its parent', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('If tree is root parent should be null', function() {
    expect(tree.parent).to.equal(null);
  });

  it('If tree is root parent should be null', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    var branchedTree = tree.removeFromParent(7);
    expect(tree.contains(7)).to.equal(false);
    expect(branchedTree.value).to.equal(7);
    expect(tree.children.length).to.equal(2);
    expect(tree.children[0].children.length).to.equal(1);
  });

});
