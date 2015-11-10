var noOfTimesError = 0;
function getPassword(id) {
	var password = document.getElementById(id).value;
	var privateStuff = document.getElementById("private");
	var form = document.privateAccess;
	if (password == "yuzhengwen") {
		privateStuff.style.display = "block";
		form.style.display = "none";
	} else {
		clearPasswordField();
		errorText = document.getElementsByClassName("error");
		for ( i = 0; i < errorText.length; i++) {
			errorText[i].style.display = "block";
		}
		noOfTimesError++;
	}
	checkIfDisable();
}

function checkIfDisable() {
	if (noOfTimesError >= 3) {
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		alert("Disabled");
	}
}

function out() {
	document.privateAccess.style.display = "block";
	document.getElementById("private").style.display = "none";
	noOfTimesError = 0;
	clearPasswordField();

	var errorText = document.getElementsByClassName("error");
	for ( i = 0; i < errorText.length; i++) {
		errorText[i].style.display = "none";
	}
}

function clearPasswordField() {
	document.getElementById("password").value = "";
}