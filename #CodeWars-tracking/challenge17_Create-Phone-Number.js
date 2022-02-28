function createPhoneNumber(numbers){
    const numbersString = numbers.join('').toString()
    return "(" + numbersString.slice(0,3) + ")" 
               + " " + numbersString.slice(3,6)
               + "-" + numbersString.slice(6,10) 
   }