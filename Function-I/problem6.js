function swap(s)
  {
    let a="";
    let arr1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let arr2=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for (j=0;j<arr1.length;j++)
      {
    if (s==arr1[j])
    {
      return arr2[j];
    }
        else if (s==arr2[j])
        {
          return arr1[j];
        }
      }
     
  }

let bag = "";
let str = "Test";
for (i=0;i<str.length;i++)
  {
    bag = bag + swap(str[i]);
  }
console.log(bag);
