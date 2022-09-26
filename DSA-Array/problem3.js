
var count1 =0;
var count2   = 0;
var arr=[2,6,7,12,19,10]
for (i=0;i<arr.length;i++)
  {
    count1 = 0;
    count2 = 0;
    for (j=1;j<=arr[i-1];j++)
      {
        if (arr[i-1]%j==0)
        {
          count1++;
        }
      }
    for (k=1;k<=arr[i+1];k++)
      {
        if (arr[i+1]%k==0)
        {
          count2++;
        }
      }
    if (count1==2 || count2==2)
    {
      console.log(arr[i]);
    }
  }