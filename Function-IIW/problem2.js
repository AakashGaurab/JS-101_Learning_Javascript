  function prime (a)
    {
  
          let count =0;
      for (i=1;i<=a;i++)
        {
          if (a%i==0)
          {
            count++;
          }
        }
      if (count==2)
      {
        console.log(a,'is prime');
      }
      
      
    }
let N=100;
for (j=1;j<=N;j++)
  {
    prime(j);
  }