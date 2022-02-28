function list(names) {
    let array = []
    switch(names.length) {
     case 0:
       return ''
       break;
     case 1:
       return names[0].name
       break;
     default:
        for (let i=0; i < names.length - 1; i++) {
          array.push(names[i].name)
        }
        return array.join(", ") + " & " + names[names.length - 1].name
   }
}