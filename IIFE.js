function add(a, b) {
  var sum = a + b;
  console.log(sum);
}

(function (a, b) {
  var product = a * b;
  console.log(product);
})(10, 10);
add(10, 20);
