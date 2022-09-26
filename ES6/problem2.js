let arr = [1, 2,3 , 8, 7, 9, 4];
let total = 0;
let avg = arr.map((element, index) => {
  total = total + element;

});


console.log(total / arr.length);



