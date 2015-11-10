var form, thankYou, errorText;
var error = [false, false, false];
var fullname, email, message;
var fullnameValue, emailValue, messageValue;

// u = user
var uFullname;
var uEmail;
var uMessage;

function getFormInput(fullnameId, emailId, messageId) {
    fullname = document.getElementById(fullnameId);
    email = document.getElementById(emailId);
    message = document.getElementById(messageId);

    fullnameValue = fullname.value;
    emailValue = email.value;
    messageValue = message.value;

    validate();

    submit();
}

function validateEmail() {
    var emailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidate.test(emailValue);
}

function validate() {
    // name
    if (isEmpty(fullnameValue)) {
        error[0] = true;
    } else {
        error[0] = false;
    }

    // email
    if (!validateEmail()) {
        error[1] = true;
    } else {
        error[1] = false;
    }

    // message
    if (isEmpty(messageValue)) {
        error[2] = true;
    } else {
        error[2] = false;
    }
}

function submit() {
    errorText = document.getElementsByClassName("error");
    //gets all elements with class name, more than 1

    if (!error[0] && !error[1] && !error[2]) {

        uFullname = fullname.value;
        uEmail = email.value;
        uMessage = message.value;

        form = document.getElementById("formWrap");
        thankYou = document.getElementById("thankYou");
        form.style.display = "none";
        thankYou.style.display = "block";

        for ( i = 0; i < errorText.length; i++) {
            errorText[i].style.display = "none";
        }

        alert("fullname:" + uFullname + " email:" + uEmail + " msg:" + uMessage);

        // send email to me
    } else {
        clearFields();
        for ( i = 0; i < errorText.length; i++) {
            errorText[i].style.display = "block";
        }
    }
}

function doAgain() {
    clearFields();
    form.style.display = "block";
    thankYou.style.display = "none";
    errorText.style.display = "none";
}

function isEmpty(str) {
    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
}

function clearFields() {
    fullname.value = "";
    email.value = "";
    message.value = "";
}