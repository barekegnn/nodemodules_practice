var calculateAvrg = require("./nameSpaceCollision.js");
function average(){
    var avrg = calculateAvrg.sum(10, 10) / 2;
    console.log(avrg);
}
// average();
// console.log(module);
// console.log(global);
// console.log(global.console);
console.log(module);
