str= ['my', 'name', 'is', 'Tony', 'Stark'];
function join(arr)
  {
    let bag = "";
for (i=0;i<arr.length;i++)
  {
    bag = bag + arr[i]+' ';
  }
console.log(bag);
  }

console.log(join(str));