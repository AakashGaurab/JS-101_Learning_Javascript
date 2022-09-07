let count =0;
let str='Iron Man is the best Superhero';
if (str.length==0)
{
  console.log('Number of Characters is ',count);
}
else 
{
for (i=0;i<str.length;i++)
  {
     if (str[i]!=' ')
    {
      count++;
    }
  }
console.log('Number of Characters  is ',count);
}