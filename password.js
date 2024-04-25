// Brute Force Passwords

module.exports = class PasswordGuesser {
  passcode;

  constructor(passcode) {
    this.passcode = passcode;
    this.numbers = "0123456789";
    this.letters = "abcdefghijklmnopqrstuvwxyz";
  }

  guess() {
    for (let i = 0; i < this.passcode.length; i++) {
      let current = this.passcode.toString().charAt(i);
      if (!this.numbers.includes(current) && !this.letters.includes(current)) {
        console.log("Password must contain letters or numbers.");
        return false;
      }
    }

    this.find(this.passcode.length, "");
  }

  find(length, current) {
    console.log(current);
    if (length === 0) {
      if (current === this.passcode) {
        console.log("Found the passcode:", current);
        return true;
      }
      return false;
    }

    if (this.letters.includes(this.passcode.charAt(0))) {
      for (let i = 0; i < this.letters.length; i++) {
        if (this.find(length - 1, current + this.letters[i])) {
          return true;
        }
      }
    } else {
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.find(length - 1, current + this.numbers[i])) {
          return true;
        }
      }
    }
    return false;
  }
};
