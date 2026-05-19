function validate() {

    var form = document.getElementById("RegForm");

    var name = form.Name.value;
    var email = form.EMail.value;
    var password = form.Password.value;
    var phone = form.Telephone.value;

    var regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var regPhone = /^[0-9]{10}$/;

    if (name == "") {
        alert("Please Enter Your Name");
        return false;
    }

    if (email == "") {
        alert("Please Enter Your Email");
        return false;
    }

    if (!regEmail.test(email)) {
        alert("Please Enter Valid Email");
        return false;
    }

    if (password == "") {
        alert("Please Enter Password");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (phone == "") {
        alert("Please Enter Phone Number");
        return false;
    }

    if (!regPhone.test(phone)) {
        alert("Phone Number must be 10 digits");
        return false;
    }

    alert("Registration Successful!");
    return true;
}