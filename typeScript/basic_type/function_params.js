"use strict";
function Sum(one, two) {
    return one + two;
}
function noReback() {
    return;
}
function oracle() {
    while (true) {
    }
    console.log("1");
}
function add(_a) {
    var one = _a.one, two = _a.two;
    return two + one;
}
console.log(add({ one: 4, two: 2 }));
Sum(1, 2);
noReback();
