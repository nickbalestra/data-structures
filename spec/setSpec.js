describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add numbers to a set', function(){
    set.add(10);
    set.add(100);
    expect(set.contains(100)).to.equal(true);
    expect(set.contains(10)).to.equal(true);
  });

  it('should handle input objects of any type', function(){
    set.add(10);
    set.add('ten');
    set.add([10]);
    set.add({ten: 10});
    var func = function(x){console.log(x)};
    set.add(func);
    expect(set.contains(10)).to.equal(true);
    expect(set.contains('ten')).to.equal(true);
    expect(set.contains([10])).to.equal(true);
    expect(set.contains({ten: 10})).to.equal(true);
    expect(set.contains(func)).to.equal(true);
  });

  it('Once a value is added to a set, adding it a second time should not increase the size of the set', function(){
    set.add("Susan Sarandon");
    set.add("Susan Sarandon");
    expect(set._length).to.equal(1);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

});
