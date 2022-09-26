function isOdd(x)
  {
    let boolean = false ;
    if (x%2!=0)
{
   boolean = true;
  return boolean;
}
  }

let N= 100;
for (i=0;i<=N;i++)
  {
     if (isOdd(i)==true)
     {
       console.log(i);
     }
  }