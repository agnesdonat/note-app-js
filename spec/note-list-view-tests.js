(function(exports) {
  function viewTest() {
    var list = new List();

    list.add(new Note('This is a new note'));
    var view = new View(list);
    console.log('has the correct HTML format -', expect(view.getListView()).toEqual('<ul><li><div>This is a new note</div></li></ul>'));
  };
  viewTest();
})(this);
