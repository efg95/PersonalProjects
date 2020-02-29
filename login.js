var count= 2
// var account = {}
// var accounts = []


function validate()
{
	// takes in the form name "login" it then takes in the input name "Username"
	// and "Password" values
	var un = document.login.Username.value
	var pw = document.login.Password.value
	var valid = false
	var usernameArray = ["Vlad", "Bob"]
	var passwordArray = ["12345", "54321"]

	for (var i = 0; i < usernameArray.length; i++)
 {

	if ((un == usernameArray[i]) && (pw == passwordArray[i]))
	{
		valid = true
		break
	}
}
	if (valid)
	{
		alert("Login was successful")
		window.location = "userLocation.html" //change this to redirect to diff page
		return false
	}
	var again = " tries"
	if (count ==1)
	{
		again = " try"
	}
	if (count >= 1)
	{
		alert("Wrong password or username")
		count--
	}
	else
	{
		alert("Incorrect password or username you are now blocked")
		document.login.Username.value = "You are now Blocked"
		document.login.Password.value = "Fool you can't see this"
		document.login.Username.disabled = true
		document.login.Password.disabled = true
		return false
	}
}
