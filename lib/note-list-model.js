(function(exports) {
  function List() {
    this._list = [];
  }

  List.prototype.insert = function(note) {
    this._list.push(note);
  };

  List.prototype.inspectNotes = function() {
    return this._list;
  }

  exports.List = List;
})(this);
