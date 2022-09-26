
function detect_prime(A)
  {
    var count =0;
    for (i=0;i<=A;i++)
  {
    if (A%i==0)
    {
      count++;
    }
    
  }
if ( count ==2)
{
  console.log(A,'is prime number ');
}
else 
{
  console.log(A,'is not a prime number');
}
  }
detect_prime(15);