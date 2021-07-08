const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.includes(-130));
const check = movements.some(function(mov) {
  return mov > 200;
});

console.log(check);

// SOME
const checkAgain = movements.some(mov => mov > 400);
console.log(checkAgain);

// EVERY
const theEveryMethod = movements.every(function(mov) {
  return mov > 0;
});
console.log(theEveryMethod);
