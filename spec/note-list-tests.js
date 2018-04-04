(function(exports) {
  function listTest() {
    var list = new List();
    var note = new Note('This is a new note');

    console.log('has an empty notes array -',expect(list._list).toEqual([]));

    list.create(note);

    console.log('has two new notes in an array -',expect(list.listNotes()).toEqual([note]));
  };

  listTest();
})(this);
