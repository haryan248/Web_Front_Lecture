// forEach

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
  console.log(hero);
});

// map
// 제곱 해주는 함수
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
// or
const squared = array.map(n => n * n);
console.log(squared);

// indexOf
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index); // 2

// findIndex
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index); // 2


// find

const todo = todos.find(todo => todo.id === 3);
console.log(todo); // {id: 3, text: "객체와 배열 배우기", done: true}


// filter

const tasksNotDone = todos.filter(todo => todo.done === false);
// or
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);

// result 
// [
//   {
//     id: 4,
//     text: '배열 내장 함수 배우기',
//     done: false
//   }
// ];

// splice
// 배열 특정 항목 지우기
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers); //[10, 20, 40]

// slice
// 배열을 잘라낼 때 사용
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]


// shift
// 첫번째 원소를 배열에서 추출
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); // 10
console.log(numbers); // [20, 30, 40]

// pop
// 맨뒤 원소를 배열에서 추출
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); // 10
console.log(numbers); // [10, 20, 30]

// unshift
// 맨 앞에 원소 추가
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30, 40]

// concat
// 배열을 하나로 합쳐줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated); // [1, 2, 3, 4, 5, 6]


// join
// 배열의 원소들을 하나의 문자열로 합침
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5


// reduce
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum);

const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);

// 첫번째 파라미터는 accumulator 와 current를 파라미터로 가져와서 결과를 반환하는 콜백함수, 
// 두번째 파라미터는 reduce 함수에서 사용 할 초깃값
// 여기서 accumulator 는 누적된 값을 의미

// 평균 계산
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum); // 3


// quiz
function countBiggerThanTen(numbers) {
    return numbers.filter((e) => e > 10).length;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
