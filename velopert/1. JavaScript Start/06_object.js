const dog = {
  name: '멍멍이',
  age: 2
};

console.log(dog.name);
console.log(dog.age);

// result
// 멍멍이
// 2

// 함수에서 객체로 파라메터 받기

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
    hero.actor
  } 입니다.`;
  console.log(text);
}
// 객체로 파라메터 넘겨줌
print(ironMan);
print(captainAmerica);

// result 
// 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
// 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.


// * 객체 구조 분해 *
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const { alias, name, actor } = hero; // 문법 활용
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
// or

function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);


// 객체 안에 함수 넣기
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  }
};

dog.say();

// result 
// 멍멍!

const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function() { // 이름 없어도 가능
    console.log(this.sound);
  }
// say: () => { // 화살표 함수의 경우 this 가 객체가 아니기 때문에 error !!
// console.log(this.sound);
// }
};

dog.say();

// getter, setter
// getter
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

// result
// sum 함수가 실행됩니다!
// 3
// sum 함수가 실행됩니다!
// 6

// numbers.sum() 을 한 것이 아니라 number.sum로 함수 실행 가능
// Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환

// setter 
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);

// result
// 3
// a가 바뀝니다.
// calculate
// b가 바뀝니다.
// calculate
// a가 바뀝니다.
// calculate
// 16
// 16
// 16
