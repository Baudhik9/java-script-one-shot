const account_id=123456789  //it cannot be changed
let account_email="bm@gmail.com"  // it can be changed in future
var account_password="12345" // we don't use var nowadays bcoz of functional scope and local scope
account_city="jaipur" //we can also declare a variable like this but prefer not to do it
let account_state //if only declared it is valued as undefined

account_email="bmadan@gmail.com"
// account_id=3
console.log(account_id);
console.log(account_email);
console.table([account_id,account_email,account_password,account_city,account_state])
