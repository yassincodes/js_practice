function abbrevName(name){
  
    let firstandlast = name.split(' ')
    var first = firstandlast[0].split('')[0]
    var last = firstandlast[1].split('')[0]
      return first.toUpperCase() + '.' + last.toUpperCase()
    }