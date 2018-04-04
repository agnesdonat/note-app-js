(function(exports) {
  function View(list) {
    this._list = list;
  }

  View.prototype.getListView = function() {
    console.log(this._list)
    this._list.forEach(function(element) {
      console.log(element)
    });

    // var output = [];
    // console.log(this._list);
    // this._list.forEach(function(element) {
    //   // output.push('<li><div>' + element + '</li></div>');
    // });
  }
exports.View = View;
})(this);
