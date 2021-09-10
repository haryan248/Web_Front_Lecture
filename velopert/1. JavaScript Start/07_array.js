// 배열에 새 항목 추가하기
const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

objects.push({
  name: '멍뭉이'
});

console.log(objects);

// 배열의 크기 알아내기
const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects.length); // 2

objects.push({
  name: '멍뭉이'
});

console.log(objects.length); // 3