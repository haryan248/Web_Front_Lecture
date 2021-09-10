// function
function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);

function add(a, b) {
  return a + b;
  console.log('호출이 되지 않는 코드!'); // return 아래는 실행이 되지 않는다.
}

const sum = add(1, 2);
console.log(sum);

// * 템플릿 리터럴 *

function hello(name) {
  console.log(`Hello, ${name}!`); // back tick 활용
}
hello('velopert');

// arrow function

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));


// 축약
const add = (a, b) => a + b;
console.log(add(1, 2));