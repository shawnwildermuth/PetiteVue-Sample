// main.js
PetiteVue.createApp({
  message: {
    fullName: "",
    email: "",
    subject: "",
    body: "",
  },
  status: "",
  send() {
    if (this.validate()) {
      this.status = `Sent to ${this.message.fullName}`;
    }
  },
  errors: {
    valid: false,
    fullName: "",
    email: "",
    subject: "",
    body: "",
  },
  validate() {
    let valid = true;

    const { fullName, email, subject, body } = this.message;

    if (!fullName) {
      this.errors.fullName = "Full name is required";
      valid = false;
    } else if (fullName.length < 5) {
      this.errors.fullName = "Full name must be at least 5 characters";
      valid = false;
    } else this.errors.fullName = "";

    if (!email) {
      this.errors.email = "Email is required";
      valid = false;
    } else if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      this.errors.email = "Must be a valid email address";
      valid = false;
    } else this.errors.email = "";

    if (!subject) {
      this.errors.subject = "Subject is required";
      valid = false;
    } else if (subject.length < 5) {
      this.errors.subject = "Subject must be at least 5 characters";
      valid = false;
    } else this.errors.subject = "";

    if (!body) {
      this.errors.body = "Body is required";
      valid = false;
    } else if (body.length < 5) {
      this.errors.body = "Body must be at least 5 characters";
      valid = false;
    } else if (body.length > 500) {
      this.errors.body = "Body must be less than 500 characters";
      valid = false;
    } else this.errors.body = "";

    this.errors.valid = valid;
    return valid;
  },
}).mount("#theForm");
