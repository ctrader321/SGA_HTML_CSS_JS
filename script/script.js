// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   }
  
//   function validate() {
//     const $result = $("#result");
//     const email = $("#email").val();
//     $result.text("");
  
//     if (validateEmail(email)) {
//       $result.text(email + " is valid :)");
//       $result.css("color", "green");
//     } else {
//       $result.text(email + " is not valid :(");
//       $result.css("color", "red");
//     }
//     return false;
//   }
  
//   $("#validate").on("click", validate);

function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!(inputText.value.match(mailformat))) {
        alert("Invalid email address! Please redo your submition.");
        return false;

    } else {
        alert("Email validated, you're all set!");
        return true;
        
    }

}

function ValidatePhone(inputNum) {
    var phoneformat = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    if(!(inputNum.value.match(phoneformat))) {
        alert("Invalid phone number! Please redo your submition");
        return false;
    } else {
        alert("Phone number validated, you're all set!");
        return true;
    }

}
