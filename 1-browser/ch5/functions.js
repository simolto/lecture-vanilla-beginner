function add(num1, num2) {
  return num1 + num2
}

function divide(num1, num2) {
  return num1 / num2
}

function surprise(operator) {
  const result = operator(2, 3)
  console.log(result)
}
surprise(divide)

/* JS에서 함수는 매개변수로 전달이 가능. 함수 레퍼런스가 전달되는 것 */
