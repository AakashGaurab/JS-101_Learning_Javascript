 var char = 'z';
let ARRAY=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let array =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for (i=0;i<=array.length-1;i++){
  if (array[i]==char)
  {
    char = ARRAY[i];
  }
  else {
    continue;
  }
}
console.log(char);