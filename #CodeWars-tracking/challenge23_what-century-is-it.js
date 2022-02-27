function whatCentury(year) {
    let number = parseInt(year.slice(0,2)) + 1
    if (parseInt(year.slice(2,4)) == 0) {
      number = number - 1
    }
    let word = ''
    if (number <= 20) {
      word = "th"
    } else if (parseInt(number.toString()[1]) == 1) {
      word = "st"
    } else if (parseInt(number.toString()[1]) == 2) {
      word = "nd"
    } else if (parseInt(number.toString()[1]) == 3) {
      word = "rd"
    } else {
      word = "th"
    }
    return number + word
  }