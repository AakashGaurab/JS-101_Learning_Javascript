function replace(str)
{

let str1= "";
for (i=0;i<str.length;i++)
  {
    if (str[i]==" ")
    {
      str1= str1+"-";
    }
    else 
    {
      str1 = str1 + str[i];
    }
  }
console.log(str1);

  
}
let text = "Hello Namaste Sir ji";
replace(text);