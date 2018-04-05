(function(exports) {
  var View = function(list){
    this._list = list
  }

View.prototype.showListOfNotes = function(){
  var htmlString = ["<ul>"]
  this._list.inspectNotes().forEach(function(element){
    htmlString.push("<li><div>" + element.getNote() + "</div></li>")

  });
  htmlString.push("</ul>");
  return htmlString.join('')
}
  exports.View = View;
})(this)
