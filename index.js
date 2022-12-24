const persistence = (num) => {
  if (num === 0) return 0

  let mul = 1
  while (num !== 0) {
    const lastDigit = num - Math.floor(num / 10) * 10
    mul = mul * lastDigit
    num = Math.floor(num / 10)
  }
  return mul
}

const strength = (num) => {
  let step = 0
  while (num > 9) {
    num = persistence(num)
    step++
  }
  return step
}

const res = strength(39)
console.log(res)
