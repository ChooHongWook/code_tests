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

class extendsClass extends MyClass {
  constructor(ele, ele2) {
    super(ele);
    this.ele2 = ele2;
  }

  method3() {
    console.log('method3');
  }
  method4() {
    this.method2();
  }
  method5() {
    super.method2();
  }
}

let newInstance = new extendsClass('처음에 넣음', '두번째 요소');
console.log('newInstance:', newInstance);
newInstance.method1();
newInstance.method2();
newInstance.method3();
newInstance.method4();
newInstance.method5();
