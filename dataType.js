"use strict";
/*
  数据类型
*/
// 基本类型
var n = 3;
var s = 'ss';
var a = true;
// 数组
var arr = ['a', 'b', 'c']; // 字符串数组
var arr2 = ['a', 'b', 'c']; // 字符串数组
var arr3 = [{ name: 'a' }, { name: 'b' }]; // 对象数组
var arr4 = [{ name: 'a' }, { name: 'b' }]; // 对象数组
var arr5 = [2, 'ss', { name: 'ggg' }]; // 字符串或数字或对象组成数组
var arr6 = [1, true, 'sss', {}]; // 任意数据类型的数组
// 元组类型tuple
// 元组类型是不可变的数组，长度和类型都是固定不变的
var person = ['Tom', 20];
// 枚举类型enum
// 枚举就是一一列举，一般用于定义固定的值，比如性别，生肖等固定值，通过枚举定义的值不能在外部修改
var sex;
(function (sex) {
    sex[sex["BOY"] = 0] = "BOY";
    sex[sex["GIRL"] = 1] = "GIRL";
})(sex || (sex = {}));
;
console.log("Tom is " + sex.BOY);
var sex2;
(function (sex2) {
    sex2["BOY"] = "\u7537";
    sex2["GIRL"] = "\u5973";
})(sex2 || (sex2 = {}));
;
// 任意类型any
// 慎用，与var意义一样，定义为any类型的变量可以随意赋值为任意类型的值，相当于放弃类型检查
var btn = document.getElementById('btn');
btn.style.color = '#ffffff';
// null，undefined类型
var ss = 'a';
ss = 2;
ss = null;
ss = undefined;
// void类型
// 表示没有任何类型，表示函数没有返回值,即不能使用return语句
function say(name) {
    console.log('hello ', name);
}
say('Tom');
// never类型
// 一般用于抛出异常，永远不会有返回值
var msg;
function error(message) {
    throw new Error(message);
}
error('error');
