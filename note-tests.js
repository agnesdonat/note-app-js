(function(exports) {
  function noteTest() {
    var note = new Note('This is a new note');
    console.log('noteTest() -',expect(note.getNote()).toEqual('This is a new note'))
  };

  noteTest();
})(this);
