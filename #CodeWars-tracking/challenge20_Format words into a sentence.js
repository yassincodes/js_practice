function formatWords(words){
    const arr = []
    words && words.map((word) => {
      (word != '') && arr.push(word)
    })
    if (arr.length == 1) {
      return arr.join('')
    } else if (arr.length == 2) {
      return arr.join(' and ')
    } else if (arr.length > 2) {
      const last = arr.pop()
      return arr.join(", ") + " and " + last
    } else {
      return ''
    }
  }