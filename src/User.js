class User {
    constructor(firstName, lastName, email, username) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.username = username;
    }
  }

  module.exports = {
    User: User
}