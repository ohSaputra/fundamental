class Students {
  input(scores) {
    this.score = scores
  }

  calculateTotalScore() {
    let total = 0

    this.score.forEach(scores => {
      total += scores
    })

    return total
  }
}


const studentBaru = new Students()
const studentLagi = new Students()

studentBaru.input([ 10, 10, 10, 10, 10 ])
studentLagi.input([ 20, 20, 20, 20, 20 ])

console.log(studentBaru)
console.log(studentBaru.calculateTotalScore())

console.log(studentLagi)
console.log(studentLagi.calculateTotalScore())

