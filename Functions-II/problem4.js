
function subString (a,b=str1.length)
  {
    let bag = "";
for (i=a;i<b;i++)
{
  bag = bag+str1[i];
}
return bag;
  }


let str1 = "Mozilla";
console.log(subString(1,6));