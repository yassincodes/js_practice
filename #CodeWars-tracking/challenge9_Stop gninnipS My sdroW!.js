function spinWords(string){
    // first I'm gonna split the string and turn it into an array
    // then I'll map that array and make inside an if statment
    // if the word.length => 5 then reverse it and push it to "array"
    // else push it to "array" only
    // finally we will glow this list together
    let array = []
      string.split(' ').map((word) => {
      if (word.length >= 5) {
        let reversedWord = word.split('').reverse().join('')
        array.push(reversedWord)
      } else {
        array.push(word)
      }
    })
    return array.join(" ")
  }