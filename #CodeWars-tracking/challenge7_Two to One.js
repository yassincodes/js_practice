function longest(s1, s2) {
    // first the app gonna check if 'a' exists or not (in s1 and s2)
    // if a exist then push it in arrayx
    // if not then move to the next line
    let S = ''
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    alphabet.map((AA) => {
      if (s1.includes(AA) || s2.includes(AA)) {
      S = S + AA
      }
    })
    return S
  }