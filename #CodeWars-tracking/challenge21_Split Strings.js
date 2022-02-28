function solution(str){
    const array = []
    // the first step is making the array without checking for the lest element
    for (let i=0; i<str.length; i=i+2) {
      array.push(str.slice(i,i+2))
    }
    // the second step is to check for the last element
    if (array.length && array[array.length - 1].length == 1) {
       array[array.length - 1] = array[array.length - 1] + "_"
    }
    return array
  }