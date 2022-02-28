function filter_list(l) {
    // Return a new array with the strings filtered out
    const newl = []
    for (let i=0 ; i < l.length ; i++) {
     typeof(l[i]) === "number" && newl.push(l[i])
    }
    return newl
  }