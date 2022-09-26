
function splice (a,b=arr1.length)
  {
    let arr2=[];
for (i=a;i<b;i++)
  {
    arr2.push(arr1[i]);
  }
 return arr2;
  }
let arr1=['ant', 'bison', 'camel', 'duck', 'elephanrt'];

console.log(splice(2,5));