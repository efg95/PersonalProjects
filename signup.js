var account = {}
var accounts = []


function storeInfo()
{
  var valid = false
  var un = document.signup.Username.value
  var pw = document.signup.Password.value
  var repw = document.signup.Re_enterPW.value
  var email = document.signup.emailadd.value

  if (pw != repw){
    alert("passwords do not match")
    window.location = "signup.html"
  }

  // if (typeof account != "undefined"){
  //   alert("the account object exists")
  // }

  account.username = un
  account.password = pw
  account.email = email
  alert(typeof account)
  accounts.push(account)

  str = JSON.stringify(accounts[0])
  console.log(str)
  alert(str)
  valid = true //account has been created successfully

  window.location = "login.html"


}
