class MyClass {
  // 여러 메서드를 정의할 수 있음
  constructor(ele) {
    this.ele = ele;
  }
  method1() {
    console.log('method1');
  }
  method2() {
    console.log('method2');
  }
}

let myInstance = new MyClass('요소입니다');

myInstance.addedMethod = function () {
  console.log('addedMethod');
};

console.log('myInstance:', myInstance);
myInstance.method1();
myInstance.method2();
myInstance.addedMethod();
