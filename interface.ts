// 接口
// 接口规范对象
interface Info {
  name: string,
  age: number,
  city?: string
}

function getUserInfo(user: Info) {
  console.log(`${user.name} + ${user.age} + ${user.city}`)
}
function getStudentInfo(student: Info) {
  console.log(`${student.name}`)
}

// 接口规范函数
interface Caculate {
  // 左侧为参数，右侧为返回类型
  (a: number, b: number): number
}
let sumHH: Caculate = function(a: number, b: number): number {
  return a + b
}
console.log(sumHH (1, 2))
// 接口规范数组
interface Student {
  [index: number]: string
}
let students: Student = ['zhangsan', 'lisi']
// 接口规范类
interface Animal {
  name: string,
  eatHH(food: string): void
}
class PersonHH implements Animal {
  eat(): void {
    throw new Error("Method not implemented.");
  }
  name: string
  constructor(name: string) {
    this.name = name
  }
  eatHH(food: string): void {
    console.log(`eat ${food}`)
  }
}
// 接口继承接口
interface AnimalHHH {
  name: string
  eatHHH(any: string): void
}

interface LionHHH extends AnimalHHH {
  sleep(): void
}

class  Bob implements LionHHH {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eatHHH(any: string): void{
    console.log(`吃${any}`)
  }
  sleep(){
    console.log('睡觉')
  }
}