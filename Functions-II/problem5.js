
function include(arr,str)
  {
let flag = false ;

for (i=0;i<arr.length;i++)
  {
    if (str==arr[i])
    {
      flag = true;
    }
    
  }
    return flag;
  }

let arr1= ['cat', 'mat', 'hat', 'sat'];
let str1= 'cat';
console.log(include(arr1,str1));