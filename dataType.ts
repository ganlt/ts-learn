/*
  数据类型
*/

// 基本类型
let n:number = 3;
let s:string = 'ss';
let a:boolean = true;
// 数组
let arr:string[] = ['a', 'b', 'c']; // 字符串数组
let arr2:Array<string> = ['a', 'b', 'c']; // 字符串数组
let arr3:object[] = [{name: 'a'}, {name: 'b'}]; // 对象数组
let arr4:Array<object> = [{name: 'a'}, {name: 'b'}];// 对象数组
let arr5:Array<string|number|object> = [2, 'ss', {name: 'ggg'}]; // 字符串或数字或对象组成数组
let arr6:Array<any> = [1, true, 'sss', {}]; // 任意数据类型的数组

// 元组类型tuple
// 元组类型是不可变的数组，长度和类型都是固定不变的
let person:[string, number] = ['Tom', 20];

// 枚举类型enum
// 枚举就是一一列举，一般用于定义固定的值，比如性别，生肖等固定值，通过枚举定义的值不能在外部修改
enum sex {
  BOY,
  GIRL
};
console.log(`Tom is ${sex.BOY}`)
enum sex2 {
  BOY="男",
  GIRL="女"
};

// 任意类型any
// 慎用，与var意义一样，定义为any类型的变量可以随意赋值为任意类型的值，相当于放弃类型检查
let btn:any = document.getElementById('btn');
btn.style.color = '#ffffff';

// null，undefined类型
let ss:(string|number|null|undefined) = 'a';
ss = 2;
ss = null;
ss = undefined;

// void类型
// 表示没有任何类型，表示函数没有返回值,即不能使用return语句
function say(name:string):void {
  console.log('hello ', name);
}
say('Tom');

// never类型
// 一般用于抛出异常，永远不会有返回值
let msg:never;
function error(message:string):never {
  throw new Error(message)
}
error('error');