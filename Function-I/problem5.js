function lower(str)
  {
    return str.toLowerCase();
  }

let arr1=[];
let bag ="";
let arr= ["MA", "SA", "I", "SCH", "OOL"]
for (i=0;i<arr.length;i++)
  {
    bag= lower(arr[i]);
    arr1.push(bag);
  }
console.log(arr1);