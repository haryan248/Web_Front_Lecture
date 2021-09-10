
// for (초기 구문; 조건 구문; 변화 구문;) {
//   코드
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// result
// 0 ~ 9까지 출력

// 배열 + for문
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// result
// 멍멍이
// 야옹이
// 멍뭉이

// while문
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//for of 문

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

// 배열안의 원소를 반복시킴


// for...in

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

// 내장 함수
console.log(Object.entries(doggy)); // 
console.log(Object.keys(doggy)); //["name","sound","age"]
console.log(Object.values(doggy)); // ['멍멍이','멍멍',2]

// Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
// Object.keys: [키, 키, 키] 형태의 배열로 변환
// Object.values: [값, 값, 값] 형태의 배열로 변환

// or

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}


// break 와 continue
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}


// practice
function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result); // 15

// quiz
function biggerThanThree(numbers) {
    /* 구현해보세요 */
    let result = [];
    for (let number of numbers) {
        if (number > 3) {
            result.push(+number);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

