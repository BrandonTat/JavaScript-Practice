// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
//
// console.log(mysteryScoping5());

// function madLib(ver, adj, noun) {
//   return `We shall ${ver.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
// }
//
// console.log(madLib('make', 'best', 'guac'));

// function isSubstring(searchString, subString) {
//   let words = searchString.split(' ');
//   return words.includes(subString);
// }
//
// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));

// function fizzBuzz(arr) {
//   let result = [];
//
//   arr.forEach(el => {
//     if ((el % 3 === 0) ^ (el % 5 === 0)) {
//       result.push(el);
//     }
//   });
//
//   return result;
// }
//
// console.log(fizzBuzz([15, 5, 3, 1]));

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(15485863));
// console.log(isPrime(3548563));

function sumOfNPrimes(n) {
  let count = 0;
  let sum = 0;
  let cur = 2;

  while (count < n) {
    if (isPrime(cur)) {
      sum += cur;
      count++;
    }

    cur++;
  }

  return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
