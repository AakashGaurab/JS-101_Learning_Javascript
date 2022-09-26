let isOdd = (num) => {
  if (num % 2 == 1) {
    return true;
  }
  else {
    return false;
  }
}
let N = 100;
for (i = 1; i <= N; i++) {
  isOdd(i) ? console.log(i, "is a odd Number") : null;
}


