let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let bag = "";

let input = (str) => {
  for (i = 0; i < str.length; i++) {
    let check = lower.map((item, index) => {
      str[i] == item ? bag = bag + upper[index] : str[i] == upper[index] ? bag = bag + lower[index] : null;
    });
  }
  console.log(bag);

};



input("Test")

