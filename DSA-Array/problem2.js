var count = 0;
var arr=[2,2,2,3,5,2,2,2];
for (i=0;i<arr.length;i++)
  {
    if (arr[i]%2!=0 & (arr[i-1]%2==0 || arr[i+1]%2==0))
    {
      count++;
    }
  }
console.log(count);