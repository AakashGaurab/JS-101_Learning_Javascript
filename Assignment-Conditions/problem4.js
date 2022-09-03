let stored_user_name = "aakash@gmail.com";
let stored_password = "aakash";
let input_user_name = "aakash01@gmail.com";
let input_password = "aakash";
if (stored_user_name==input_user_name){
  if (stored_password==input_password){
    console.log('You can Login!! ');
  }
  else {
    console.log ('Wrong Password!');
  }
}
else if (stored_password==input_password){
  console.log('Entered Email Id is wrong!');
}
else {
  console.log('Wrong Email Id and Password! ');

}