const numbers1 = [...Array(20).keys()]
console.log(numbers1)
const numbers1_1 = [...Array(20).keys()].map((i)=>i+1)
console.log()
const numbers2 = Array.from({length:20}, i=>i+1)