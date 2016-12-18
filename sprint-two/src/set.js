var Set = function() {
  var set = Object.create(setPrototype);
  //change to array
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
  //check if the item is already in the array. ie. no duplicate.
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  } return false;
};

setPrototype.remove = function(item) {
  var indexToRemove;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      indexToRemove = i;
    }
  }
  this._storage.splice(indexToRemove, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 
linear

 */
