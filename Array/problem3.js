var sum=0;
var count=0;
var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (i=1;i<=array.length-1;i++)
  {
    if (array[i]%2==0)
    {
      sum = sum + array[i];
      count++;
    }
    
  }
console.log('The Average is ',sum/count);