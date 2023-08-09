// 예제1
let num = 2
num = 3

const num2 = 3
// num2 = 3 // ❌ impossible

// 예제2
let obj = {}
obj = []

const obj2 = {}
// obj2 = [] // ❌ impossible

// 예제3
const obj3 = {
  name: 'ellie',
  age: 21,
}
obj3.name = 'bob' // possible

/* JS에서 변수 선언 방식은 2가지. 선언하고자 하는 데이터 타입에 따라 업데이트되는 조건이 다름 
    특히 레퍼런스 타입은 const 키워드로 선언되었어도 내부 속성은 수정 가능함. 이는 당연한 것
*/
