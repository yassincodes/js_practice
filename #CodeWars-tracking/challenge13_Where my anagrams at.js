function anagrams(word, words) {
    let array = []
    words.map((ele) => {
      if (ele.split('').sort().join('') === word.split('').sort().join('')) {
        array.push(ele)
      } 
    })
    return array
  }