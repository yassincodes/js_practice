function pigIt(str){
    let array = []
    let letters = /^[A-Za-z]+$/
    str.split(' ').map((word) => {
      if (word.match(letters)) {
       array.push(word.slice(1) + word.charAt(0) + "ay")
      } else {
        array.push(word)
      }
    })
    return array.join(" ")
  }
  