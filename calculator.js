function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function sum(array) {
    return array.reduce((a, b) => a + b, 0)
}

module.exports = {add, subtract, sum}