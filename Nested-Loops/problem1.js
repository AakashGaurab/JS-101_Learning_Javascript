let bag = "";
let days ;
for (j=1;j<=12;j++)
  {
    if (j==2){
      days = 28;
    }
    else if (j==4 || j==6 || j==9 || j==11)
    {days =30;
    }
    else 
    {
      days =31;
    }
for (i=1;i<=days;i++)
  {
    bag = i+"-"+j;
    console.log(bag);
    console.log( );
  }
  
  }
