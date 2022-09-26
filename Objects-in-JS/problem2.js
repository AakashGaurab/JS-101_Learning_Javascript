str="hellonamaste";
obj={};
for (i=0;i<str.length;i++)
  {
    count = 0;
    for (j=0;j<str.length;j++)
      {
        if (str[i]==str[j])
        {
          count++;
        }
      }
    obj[str[i]]=count;
  }
console.log(obj);

  /*TO PRINT NO. OF TIMES STRING HAS APPEARED*/
