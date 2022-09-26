let arr = [3,4,5,6,7];
let bag ="";
let arr2=[];
let result =arr.map(function(item,index)
                        {
                          if (index%2==0)
                          {
                          arr2.push(item);
                          }
                          
                        });

console.log(arr2.join("-"));
