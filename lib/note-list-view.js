(function(exports) {
  function View() {
    this._list = list;
  }

// TODO: Why does it work with a function, but not a constuctor variable

  View.prototype.getListView = function() {
    var output = ['<ul>'];

    this._list.inspectNotes().forEach(function(element) {
      output.push('<li><div>' + element._text + '</div></li>');
    });

    output.push('</ul>');
    return output.join('');
  };

exports.View = View;
})(this);
