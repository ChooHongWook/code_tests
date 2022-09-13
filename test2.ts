interface Person {
  name: string;
  age: number;
  isSame(name: string): boolean;
}

class Student implements Person {
  name = 'Choo';
  age = 22;

  isSame(name) {
    // error: parameter의 타입 미지정
    // Parameter 'name' implicitly has an 'any' type, but a better type may be inferred from usage.
    return this.name === name;
  }
}
