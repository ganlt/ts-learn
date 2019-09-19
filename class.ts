// 类

class Person {
  // 这里声明的变量是实例的属性
  name: string;
  age: number;
  // 构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 原型方法
  say() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

let p = new Person('Tom', 22);

// 类的继承
// 在这里，Child是一个派生类，派生自Parent基类
// 派生类通常被称为子类，基类被称为超类
// 派生类含有自己的构造函数时，在调用this之前，必须调用super()
class Parent {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Child extends Parent {
  childName: string;
  constructor(name: string, age: number, childName: string) {
    super(name, age);
    this.childName = childName
  }
  childSay(): string {
    return this.childName;
  }
}
let child = new Child('Tom', 20, 'Ha')

// 类的修饰符
// 在ts中所有的class默认为public
// public 公有的，可以供自己，子类以及其他类访问
// private 私有的，只有自己可以访问，不能在声明类的外部进行访问
// protected 受保护的，可以供自己，子类访问

// readonly修饰符，只读属性必须在声明或者构造函数里被初始化

class No {
  readonly first: number = 1
  readonly sec: number;
  constructor(num: number) {
    this.sec = num
  }
}

// 存取器
// 通过getters和setters来截取对于对象成员的访问
class  Emploee {
  fullName: string = '';
}
let em = new Emploee();
em.fullName = '张三';
// 限制对于fullName的访问
let passCode = 'secret passCode';
class EmploeeUp {
  private _fullName: string = '';
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (passCode && passCode === 'secret passCode') {
      this._fullName = newName;
    } else {
      console.log('Error, the passCode must be correct');
    }
  }
}
let emup = new EmploeeUp();
emup.fullName = '李四'; // set
if (emup.fullName) {
  console.log(emup.fullName) // get
}

// 静态属性和静态方法
// 静态属性和静态方法只能被类直接调用，不能被类的示例继承
// 父类的静态方法和静态属性，可以被子类继承

class PersonTwo {
  static name2 = 'Two';
  static say() {
    console.log('hello')
  }
}

let p2 = new PersonTwo()
PersonTwo.say()

// 抽象类
abstract class Animal {
  abstract eat(): void;
}

// 抽象类不能实例化
// 抽象类的子类继承抽象类的方法并实现，若子类未实现抽象类的方法则会报错
class Lion extends Animal {
  eat() {
    console.log('eat rice')
  }
}