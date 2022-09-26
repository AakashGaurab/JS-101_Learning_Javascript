let count = 0;
let N = 100;
for (i=1;i<=N;i++)
  {
    for (j=1;j<=i;j++)
      {
        if (i%j==0)
        {
          count++;
        }
      }
    if (count==2)
    {
      console.log(i,'is a Prime Number ');
    }
    else 
    {
      count = 0;
    }
  }

