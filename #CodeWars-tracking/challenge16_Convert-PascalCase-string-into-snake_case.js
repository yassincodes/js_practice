function toUnderscore(string) {
    const array = []
    string.toString().split('').map((letter, key) => {
      if (letter === letter.toUpperCase() && key === 0) {
        array.push(letter.toLowerCase())
      }else if (letter === letter.toUpperCase() && isNaN(letter)) {
        array.push("_" + letter.toLowerCase())
      } else {
        array.push(letter)
      }
    })
    return array.join("")
  }