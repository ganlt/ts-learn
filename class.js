"use strict";
// 类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // 构造函数
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // 原型方法
    Person.prototype.say = function () {
        console.log(this.name + " is " + this.age + " years old.");
    };
    return Person;
}());
var p = new Person('Tom', 22);
// 类的继承
// 在这里，Child是一个派生类，派生自Parent基类
// 派生类通常被称为子类，基类被称为超类
// 派生类含有自己的构造函数时，在调用this之前，必须调用super()
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }
    Parent.prototype.say = function () {
        return this.name + " is " + this.age + " years old.";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, childName) {
        var _this = _super.call(this, name, age) || this;
        _this.childName = childName;
        return _this;
    }
    Child.prototype.childSay = function () {
        return this.childName;
    };
    return Child;
}(Parent));
var child = new Child('Tom', 20, 'Ha');
// 类的修饰符
// 在ts中所有的class默认为public
// public 公有的，可以供自己，子类以及其他类访问
// private 私有的，只有自己可以访问，不能在声明类的外部进行访问
// protected 受保护的，可以供自己，子类访问
// readonly修饰符，只读属性必须在声明或者构造函数里被初始化
var No = /** @class */ (function () {
    function No(num) {
        this.first = 1;
        this.sec = num;
    }
    return No;
}());
// 存取器
// 通过getters和setters来截取对于对象成员的访问
var Emploee = /** @class */ (function () {
    function Emploee() {
        this.fullName = '';
    }
    return Emploee;
}());
var em = new Emploee();
em.fullName = '张三';
// 限制对于fullName的访问
var passCode = 'secret passCode';
var EmploeeUp = /** @class */ (function () {
    function EmploeeUp() {
        this._fullName = '';
    }
    Object.defineProperty(EmploeeUp.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passCode && passCode === 'secret passCode') {
                this._fullName = newName;
            }
            else {
                console.log('Error, the passCode must be correct');
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmploeeUp;
}());
var emup = new EmploeeUp();
emup.fullName = '李四'; // set
if (emup.fullName) {
    console.log(emup.fullName); // get
}
// 静态属性和静态方法
// 静态属性和静态方法只能被类直接调用，不能被类的示例继承
// 父类的静态方法和静态属性，可以被子类继承
var PersonTwo = /** @class */ (function () {
    function PersonTwo() {
    }
    PersonTwo.say = function () {
        console.log('hello');
    };
    PersonTwo.name2 = 'Two';
    return PersonTwo;
}());
var p2 = new PersonTwo();
PersonTwo.say();
// 抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// 抽象类不能实例化
// 抽象类的子类继承抽象类的方法并实现，若子类未实现抽象类的方法则会报错
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lion.prototype.eat = function () {
        console.log('eat rice');
    };
    return Lion;
}(Animal));
