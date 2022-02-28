function solution(number){
    let S = 0
    for (let i=2; i<number; i++) {
      i/3 % 1 == 0 || (i/5 % 1 == 0) ? S = S + i : S
    }
    return S
  }