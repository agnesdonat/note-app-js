(function(exports) {
  function testCircleRadiusDefaultsTo10() {
    var circle = new Circle();

    console.log(expect(circle.radius).toEqual(10));
  };

  testCircleRadiusDefaultsTo10();
})(this);
