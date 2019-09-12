"use strict";
/*
  函数
*/
// 形参和实参完全一样
function say1(name) {
    console.log('hello ', name);
}
say1('Tom');
// 可选参数
function say2(name, age) {
    console.log('hello ', name, age);
}
say2('Tom');
say2('Tom', 20);
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
// 剩余参数
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return eval(args.join('+'));
}
var total = sum(1, 2, 3, 4, 5);
console.log(total);
this.say2('Tom');
// 函数的实现，若想根据传入参数不同类型实现不同的逻辑，则需要在函数体内做类型的判断
function sayTo(val) {
    console.log(val);
}
sayTo('Tom');
sayTo(20);
