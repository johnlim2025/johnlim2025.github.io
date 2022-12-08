function validateForm() {
    var name = document.forms["reach_form"]["name"].value;
    var number = document.forms["reach_form"]["number"].value;
    var email = document.forms["reach_form"]["mail"].value;
    var subject = document.forms["reach_form"]["subject"].value;
    var regName = /\d+$/g;
    

    if (name == "" || regName.test(name)) {
        window.alert("Invalid Entry for Your Name!");
        return false;
    }

    if (number == "" || number.length < 7 || isNaN(number)) {
        window.alert("Invalid Entry for Your Phone Number!");
        return false;
    }

    if (email == "" || !(email.includes("@")) || email.length < 4) {
        window.alert("Invalid Entry for Your Email!");
        return false;
    }

    if (subject == "") {
        window.alert("Please enter a subject!");
        return false;
    }


    window.alert("Thanks for reaching out!");
    return true;

}