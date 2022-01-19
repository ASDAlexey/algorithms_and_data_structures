const factorial = n => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};


console.log('factorial', factorial(10)) // 120

// 1,1,2,3,5,8,13,...
// n - номер фисла Фибоначчи
const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonachi(n - 1) + fibonachi(n - 2);
  }
}

console.log('fibonachi', fibonachi(6)) // 8
