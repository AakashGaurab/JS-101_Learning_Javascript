let i = 1;
let sum = 0;
let x = 0;
let avg;
while (i<=100){
  if (i%2==0){
    sum = sum +i;
    x=x+1;
  }
  i++;
}
avg = sum/x;
console.log('Average of Even number from 1 to 100 is',avg);
