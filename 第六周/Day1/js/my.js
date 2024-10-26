let sum1 = 0
let sum2 = 0
for (i = 1; i <= 10; i++) {
  switch (i) {
    case (i / 2 == 0):
      sum1 += i
      break
    default:
      sum2 += i
      break
  }
}

console.log(sum1, sum2)
