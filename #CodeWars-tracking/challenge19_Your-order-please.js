function order(words){
    const indexs = []
    const wordsArray = words.split(' ')
    const result = []
    wordsArray.map((word) => {
      word.split('').map((letter) => {
        [1,2,3,4,5,6,7,8,9].includes(parseInt(letter)) 
        && indexs.push(parseInt(letter))
      })
    })
    for (let i=0; i<wordsArray.length; i++) {
      result[indexs[i]] = wordsArray[i]
    }
    return result.join(' ').substring(1)
  }