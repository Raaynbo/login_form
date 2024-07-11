// the goal is to validate the content of each field, in order to prepare the form for an account creation
// Get all the input
// for names Check if contains only letters and .-
// for email check if string is in format ******@****.**
// for phone number check if entry is only number and at least 6 numbers
// for password check is entries are similar every time user lose focus length text might be superior to 6 char
// for submit check if all entries are correct, if not make the button simple, otherwise make it bigger and changing color
//

const firstnameInput = document.querySelector("#firstname");
const lastnameInput = document.querySelector("#lastname");
const phonenumInput = document.querySelector("#phonenum");
const emailInput = document.querySelector("#email");
const passwd = document.querySelector("#passwrd");
const passwdcInput = document.querySelector("#passwrd_conf");


passwd.addEventListener("change", passwdValidation);
passwdcInput.addEventListener("change", passwdValidation);


function passwdValidation(){
	
	if(passwdcInput.value !== passwd.value){
		console.log("password are different");
		passwd.setCustomValidity("Field invalid.");
		passwdcInput.setCustomValidity("Field invalid.");
		return false;
	} else{
		console.log("same passwd");
		passwd.setCustomValidity("");
		passwdcInput.setCustomValidity("");
		return true;
	}
	console.log(passwdcInput.value);
	console.log(passwd.value);
	
};
