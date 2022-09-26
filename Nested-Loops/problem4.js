
for (i=1;i<=10;i++)
  {
    var star = '';
    for (j=1;j<=10;j++)
      {
      if (i==1 || i==10)
      {
        star= star + '*'; 
      }
        else if (j==1 || j==10)
      {
        star = '*        *';
      }
        else 
        {
          star = ' ';
        }
        
      }
    console.log(star);
  }
  


  