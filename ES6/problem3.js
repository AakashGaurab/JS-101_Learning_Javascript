//["MA", "SA", "I", "SCH", "OOL"]
let bag = "";
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr2 = [];
let input = (arr) => {
  for (i = 0; i < arr.length; i++) {
    bag = "";
    for (j = 0; j < arr[i].length; j++) {
      for (k = 0; k < upper.length; k++) {
        if (arr[i][j] == upper[k]) {
          arr[i][j] = lower[k];
          bag = bag + lower[k];
        }
      }
      
    }arr2.push(bag);
  }
}

input (["MA", "SA", "I", "SCH", "OOL"]);
console.log(arr2);





