(function(exports) {

  function NoteController(list) {
    this._list = list;
    list.insert(note);
    var view = new View(list);
  }

  NoteController.prototype.getHTML = function() {
    document.getElementById('app').innerHTML = view.showListOfNotes();
  }

exports.NoteController = NoteController;
})(this);
