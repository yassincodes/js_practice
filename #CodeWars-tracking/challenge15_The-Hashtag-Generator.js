function generateHashtag (str) {
    let array = str.split(' ').filter(word => word !== '')
    if (str === '' || array.join('') === '' || array.join('').length >= 140) {
      return false
    } else {
      return '#' + array.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join('')
    }
   }