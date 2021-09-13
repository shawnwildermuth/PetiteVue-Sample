// document.addEventListener("DOMContentLoaded", function(event) {
PetiteVue.createApp({
  message: {
    fullName: "",
    email: "",
    subject: "",
    body: "",
  },
  errors: {
    isValid: true,
    fullName: "",
    email: "",
    subject: "",
    body: "",
  },
  status: "",
  send() {
    if (this.validate()) {
      this.status = "message sent to " + this.message.fullName;
    }
  },
  validate() {
    let result = true;
    this.status = "";

    const { fullName, email, subject, body } = this.message;

    if (!fullName) {
      this.errors.fullName = "Please enter your name";
      result = false;
    } else if (fullName.length < 5) {
      this.errors.fullName = "Name must be at least 5 characters";
      result = false;
    } else this.errors.fullName = "";

    if (!email) {
      this.errors.email = "Please enter your email";
      result = false;
    } else if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      this.errors.email = "Please enter a valid email";
      result = false;
    } else this.errors.email = "";

    if (!subject) {
      this.errors.subject = "Please enter a subject";
      result = false;
    } else if (subject.length < 5) {
      this.errors.subject = "Subject must be at least 5 characters";
      result = false;
    }else this.errors.subject = "";

    if (!body) {
      this.errors.body = "Please enter a message";
      result = false;
    } else if (body.length < 5) {
      this.errors.body = "Message must be at least 5 characters";
      result = false;
    } else if (body.length > 500) {
      this.errors.body = "Message must be less than 500 characters";
      result = false;
    } else this.errors.body = "";

    this.errors.isValid = result;

    return result;
  },
}).mount("#theForm");
//});
