var template_params = {
  "user_name": "user_name_value",
  "user_email": "user_email_value",
  "message": "message_value"
}

var service_id = "contact_service";
var template_id = "temp_PSs9ddLd";

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm(service_id, template_id, this);
    document.getElementById('contact-form').reset();
  });
}
