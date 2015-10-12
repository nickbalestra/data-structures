var keys = {
  'a': 2, 'b': 2, 'c': 2,
  'd': 3, 'e': 3, 'f': 3,
  'g': 4, 'h': 4, 'i': 4,
  'j': 5, 'k': 5, 'l': 5,
  'm': 6, 'n': 6, 'o': 6,
  'p': 7, 'q': 7, 'r': 7, 's': 7,
  't': 8, 'u': 8, 'v': 8,
  'w': 9, 'x': 9, 'y': 9, 'z': 9
};

var PrefixTree = function() {
  this.children = {};
  this.words = [];
};


PrefixTree.prototype.insert = function(word) {
  word = word.toLowerCase();
  var nodeToAddWord = traverseAddingNodes(this);
  nodeToAddWord.words.push([word]);
 

  // private helpers
  // =================================================================
  function traverseAddingNodes(node) {
    for(var i = 0; i < word.length; i++) {
      if(node.children.hasOwnProperty(keys[word[i]])) {
        node = node.children[keys[word[i]]];
      } else { break; }
    }
    for(i; i < word.length; i++) {
      node.children[keys[word[i]]] = new PrefixTree();
      node = node.children[keys[word[i]]];
    }
    return node;
  }
};


PrefixTree.prototype.getSuggestions = function(keyString, suggestionDepth) {
  var suggestionDepth = suggestionDepth || 3;
  var results = [];
  var node = this;

  for(var i = 0; i < keyString.length; i++) {
    node = node.children[keyString[i]];
  }
  results = results.concat(node.words.map(function(word) {
    return word[0];
  }));

  return suggestionDepth > 0 ?
    results.concat(getDeeperSuggestions(node, suggestionDepth)) :
    results;


  // private helpers
  // =================================================================
  function getDeeperSuggestions(root, maxDepth) {
    var deepSuggestions = [];
    while(deepSuggestions.length < maxDepth) {
      deepSuggestions.push([]);
    }

    function traverse(root, depth) {
      if(depth <= maxDepth && depth !== 0) { 
        var d = depth - 1;
        deepSuggestions[d] = deepSuggestions[d].concat(root.words);
      }

      if(depth === maxDepth) { return; }

      for(var childKey in root.children) {
        traverse(root.children[childKey], depth + 1);
      }
    }

    traverse(root, 0);
    deepSuggestions = deepSuggestions.map(function(level) {
      return level.sort(function(a, b) {
        return b[1] - a[1];
      });
    });

    return deepSuggestions.reduce(function(result, level) {
      return result.concat(level.map(function(wordTuple) {
        return wordTuple[0];
      }));
    }, []);
  }
};