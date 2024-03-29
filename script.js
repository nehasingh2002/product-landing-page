function GEEKFORGEEKS() {
	var name = document.forms.RegForm.Name.value;
	var email = document.forms.RegForm.EMail.value;
	var phone = document.forms.RegForm.Mobileno.value;
	var address = document.forms.RegForm.Address.value;
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;									 // Javascript reGex for Phone Number validation.
	var regName = /\d+$/g;								 // Javascript reGex for Name validation

	if (name == "" || regName.test(name)) {
		window.alert("Please enter your name properly.");
		name.focus();
		return false;
	}

	if (address == "") {
		window.alert("Please enter your address.");
	    address.focus();
	    return false;
	}
				
	if (email == "" || !regEmail.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
    
    if (phone == "" || !regPhone.test(phone)) {
    	window.alert("Please enter valid phone number.");
		phone.focus();
		return false;
	}

	return true;
}
