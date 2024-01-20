function validateForm() {
    let name = document.forms["contactForm"]["Name"].value;
    let email = document.forms["contactForm"]["Email"].value;
    if (name == "") {
      alert("Name must be filled out.");
      return false;
    }
    if (email = "" || !email.includes('@')) {
        alert("Please enter a valid email address");
        return false;
    }
}