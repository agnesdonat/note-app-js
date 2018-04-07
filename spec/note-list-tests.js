(function(exports) {
  function listTest() {
    var list = new List();
    var note = new Note('This is a new note');

    console.log('has an empty notes array -', expect(list._list).toMatchEmptyArray([]));

    list.insert(note);

    console.log('has a new note in the array -', expect(list.inspectNotes()[0]).toEqual(note));
  };

  listTest();
})(this);
