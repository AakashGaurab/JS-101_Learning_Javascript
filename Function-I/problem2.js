function diff(a,b)
  {
  let diff = a-b;
  return diff;
    
  }

function abs_value(diff)
  {
let diff1 = Math.abs(diff);
    return diff1;
  }

step1 = diff(112,4);
step2 = diff(1,8);
step3 = diff(24,18);
step4 = diff(2,14);

console.log(abs_value(step1));
console.log(abs_value(step2));
console.log(abs_value(step3));
console.log(abs_value(step4));


