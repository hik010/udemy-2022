interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

let user1: Greetable;

user1 = new Person('kim');

user1.greet('here');
console.log(user1);
