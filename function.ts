/*
  函数
*/

// 形参和实参完全一样
function say1(name:string):void {
  console.log('hello ', name);
}
say1('Tom');
// 可选参数
function say2(name:string, age?:number):void {
  console.log('hello ', name, age);
}
say2('Tom');
say2('Tom', 20);
// 默认参数
function ajax(url:string, method:string='GET'):void {
  console.log(url, method);
}
// 剩余参数
function sum(...args:Array<number>):number {
  return eval(args.join('+'));
}
let total:number = sum(1,2,3,4,5);
console.log(total);
this.say2('Tom');

// 函数重载
function sayTo(val: string): void; // 函数声明
function sayTo(val: number): void; // 函数声明
// 函数的实现，若想根据传入参数不同类型实现不同的逻辑，则需要在函数体内做类型的判断
function sayTo(val: any): void {
  console.log(val);
}

sayTo('Tom');
sayTo(20);
