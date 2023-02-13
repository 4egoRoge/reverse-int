module.exports = function reverse (n) {
    let res
    if(n < 0) {
        n = n * -1
        res = String(n).split('').reverse().join('')
    } else {
        res = String(n).split('').reverse().join('')
    }
    return res
}
