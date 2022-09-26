let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let total=0;
let avg=0;
let count =0;
let sum =arr.filter(function(item,index)
                    {
                      if (index%2==1)
                      {
                        total = total + item;
                      } 
                      return total;
                    }
                    );


count = arr.length;
avg = total/count;
console.log(avg);