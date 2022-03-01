var countBits = function(n) {
    function bin(dec) {
        if(dec >= 0) {
            return dec.toString(2);
        }
        else {
            return (~dec).toString(2);
        }
    }
      const toNumbers = arr => arr.map(Number);
      const sum = toNumbers(bin(n).split('')).reduce((a, b) => a + b, 0)
      return sum
    };