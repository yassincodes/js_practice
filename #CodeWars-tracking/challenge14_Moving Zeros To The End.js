var moveZeros = function (arr) {
    let array = []
    let array2 = []
    arr.map((x, key) => {
      x === 0 ? array2.push(x) && array.splice(key, 1) : array.push(x)
    })
    return array.concat(array2)
  }
  