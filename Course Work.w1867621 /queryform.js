document.getElementById("btnViewQuery").addEventListener("click", ViewQueryFunction);


function ViewQueryFunction() {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contactNumber = document.getElementById("contactNumber").value;
    var subject = document.getElementsByName("subject");
    var other = document.getElementById("dot-3");
    var otherSubject = document.getElementById("subjectOther").value;
    let details = document.getElementById("details").value;

    //email validation
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValidEmail = re.test(email);

    var subjectValue;

    let viewQuery = document.getElementById("firstView");
    let viewQuery2 = document.getElementById("secondView");


    if (name == "" || name == null) {
        alert("Full name is required!");
        return false;
    }
    else if (email == "" || email == null) {
        alert("E-mail is required!");
        return false;
    }
    else if(!isValidEmail)
    {
        alert("Enter valid email address");
        return false;
    }
    else if (contactNumber == "" || contactNumber == null) {
        alert("Contact number is required!");
        return false;
    }
    else if (contactNumber.length != 10) {
        alert("Enter valid contact number");
        return false;
    }
    else if (!(subject[0].checked || subject[1].checked || subject[2].checked)) {
        alert("Select your subject");
        return false;
    }
    else if (details == "" || details == null) {
        alert("Details are required!");
        return false;
    }
    else {

    viewQuery2.style.display = 'block';
    viewQuery.style.display = 'none';


    for (var i = 0; i < subject.length; i++) {
        if (subject[i].checked) {
            subjectValue = subject[i].value;
        }

    };

    //data pass to second view
    document.getElementById('inputName').innerHTML = " : " + name;
    document.getElementById('inputEmail').innerHTML = " : " + email;
    document.getElementById('inputContactNO').innerHTML = " : " + contactNumber;


    if (subjectValue == "Other") {
        document.getElementById('inputSubject').innerHTML = " : " + otherSubject;
    }
    else {
        document.getElementById('inputSubject').innerHTML = " : " + subjectValue;
    }

    document.getElementById('inputDetails').innerHTML = " : " + details;
}

}

//other subject text field 
function otherSubject() {
    var other = document.getElementById("dot-3");
    var otherSubject = document.getElementById("otherSubject");


    otherSubject.style.display = other.checked ? "block" : "none";

}

//edit button
function EditQueryFunction() {
    var viewQuery = document.getElementById("firstView");
    var viewQuery2 = document.getElementById("secondView");


    viewQuery.style.display = 'block';
    viewQuery2.style.display = 'none';

}

//send email button
document.getElementById('sender').addEventListener("click", sendEmail);

function sendEmail() {
var email = 'someemail@gmail.com';
var message = document.getElementById('details').value;
var subject = document.getElementById('subject').value;
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + message;

win = window.open(mailto_link, 'emailWindow');
if (win && win.open && !win.closed) win.close();

}