const reverse = (text) => {
  return text
    .split('')
    .reverse()
    .join('')
}

const average = (nums) => {
  const reducer = (sum , item) => {
    return sum + item
  }
  return nums.length === 0
    ? 0
    :nums.reduce(reducer, 0) / nums.length
}


module.exports = {
  reverse,
  average
}
