
function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  expect.toEqual(circle.radius === 10);
};

testCircleRadiusDefaultsTo10();
