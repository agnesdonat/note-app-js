(function() {
var note1 = new Note("phone Dave");
var note2 = new Note("get milk");
var list = new List();
list.insert(note1);
list.insert(note2);
var view = new View(list);
console.log("it displays note list in HTML format -", expect(view.showListOfNotes()).toEqual("<ul><li><div>" + note1.getNote() + "</div></li><li><div>" + note2.getNote() + "</div></li></ul>") )
})(this)
