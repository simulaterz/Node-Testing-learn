var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check email
    db.saveUser({
        email: email,
        password: password
    });
    // return wellcome
};