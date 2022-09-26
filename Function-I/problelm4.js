let sum =0;
//function starts to find sum of array elemnts 
function avg(arr)
  {
    
    sum = sum +arr;
    return sum;
  } // End of function

let arr=[1,2,3,4,5,6];
for (i=0;i<arr.length;i++)
  {
    if (arr.length==0)
    {
      console.log('avg is ',arr.length);
    }
    else 
    {
      sum1 = avg(arr[i]);
    }
    
  }
console.log(sum1/arr.length);


