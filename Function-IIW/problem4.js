function upper_lower (str)
  {
   
    let flag = "No";
let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','p','q','r','t','u','v','w','x','y','z'];
for (i=0;i<arr.length;i++)
  {
    if (str==arr[i])
    {
      flag="Yes";
    }
  }
return flag;
    
  }

console.log(upper_lower("A"));
