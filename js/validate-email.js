function validateForm() {
  var x = document.forms["form1"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      alert("Please enter a valid e-mail address.");
      return false;
  }
  else {
      alert("Thanks for subscribing!")
  }
}