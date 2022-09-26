arr=['sonu','monu','aakash','sonu', 'monu', 'karan', 'kumar'];
var obj = {};
let arr1= [];
for (i=0;i<arr.length;i++)
  {
    obj[arr[i]] = 1;
  }
for (let j in obj)
  {
   arr1.push(j);
  }
console.log(arr1);