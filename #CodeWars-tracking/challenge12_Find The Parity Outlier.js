function findOutlier(integers){
    let arrayofeven = []
    let arrayofodd = []
    integers.map((number) => {
      if (number/2 % 1 == 0) {
        arrayofeven.push(number)
      } else {
        arrayofodd.push(number)
      }
    })
    if (arrayofeven.length == 1) {
      return arrayofeven[0]
    } else {
      return arrayofodd[0]
    }
  }