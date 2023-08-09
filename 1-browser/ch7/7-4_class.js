class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0
    this.callback = runEveryFiveTimes
  }

  increase() {
    this.counter++
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter)
    }
  }
}

function printSomething(num) {
  console.log(num)
}

function alertNumber(num) {
  alert(num)
}

const printCounter = new Counter(printSomething)
const alertCounter = new Counter(alertNumber)
/* 클래스를 하나의 완전체로 만들기보다는 원하는 내용을 끼워 맞춰서 재조립 가능하도록 만드는 것이 더 유용함. 때문에 디펜던지 인젝션을 잘 활용하는 게 중요할 것 */
