var five = {
    UidPass: [
        {
            uid: "1",
            pass: "123"
        },
        {
            uid: "2",
            pass: "456"
        },
        {
            uid: "3",
            pass: "789"
        },
    ],

    // validate user based on uid and pass
    validateUser: function(uid, pass) {
        let user = this.UidPass.find(user => user.uid === uid && user.pass === pass);
        if (user) {
            return "Valid User";
        } else {
            return "Invalid User";
        }
    }
}

module.exports = five;