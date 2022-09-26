function last_index_of(arr,str)
  {
    for (i=arr.length-2;i>=0;i--)
  {
    if (arr[i]==str)
    {
     return ((arr.length-2)-i);
    }
  }
  }

let arr1=['My', 'name', 'is', 'Tony', 'Stark'];
let str1= "My";
console.log(last_index_of(arr1,str1));