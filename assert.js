(function(exports) {
  this.expect = function(thing) {
    return {
      toEqual: function(value) {
        return value === thing;
      },
      toBeEmpty: function() {
        return thing == null;
      }
    };
  };

  exports.expect = expect;
})(this);
