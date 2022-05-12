const info = (...params) => {
  console.log(params)
}

const arr = [1, 2, 3]
const error = (...params) => {
  console.error(params, arr)
}

module.exports = {
  info,
  error,
}
