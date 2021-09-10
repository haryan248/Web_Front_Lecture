
// 사칙 연산
let a = 1 + 2;
console.log(a);

let a = 1 + 2 - (3 * 4) / 4;
console.log(a);


// 산술 연산자
let a = 1;
a++;
++a;
console.log(a);

let a = 1;
console.log(a++); // 1
console.log(++a); // 3

let a = 1;
a--;
console.log(a); // 0

// 대입 연산자

let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a); // 1

// 논리 연산자

// NOT
const a = !true;
console.log(a); // false

// AND
const a = true && true;
console.log(a); // true

// OR
let t = true || false;
t = false || true;
t = true || true;

// 연산 순서 => NOT -> AND -> OR
const value = !((true && false) || (true && false) || !false);
// false


// 비교 연산자

const a = 1;
const b = 1;
const equals = a === b;
console.log(equals); // true

// == vs ===
// == 타입검사(X) , === 타입 검사 (O)

const a = 0;
const b = false;
const equals = a == b;
console.log(equals); // true

const a = 0;
const b = false;
const equals = a === b;
console.log(equals); // false

// 크고 작음
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false;


// 문자열 붙이기
const a = '안녕';
const b = '하세요';
console.log(a + b); // 안녕하세요