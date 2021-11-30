var seven = {
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

    // register a user with a uid and a password
    register: function (uid, pass) {
        if(uid.length < 3 || pass.length < 3){
            return "uid or pass is too short";
        }
        else{
            for(var i = 0; i < this.UidPass.length; i++){
                if(this.UidPass[i].uid === uid){
                    return "uid already exists";
                }
            }
            this.UidPass.push({
                uid: uid,
                pass: pass
            });
            return "Registration successful";

        }

    },


    // validate user based on uid and pass
    login: function(uid, pass) {
        let user = this.UidPass.find(user => user.uid === uid && user.pass === pass);
        if (user) {
            return "Valid User logged in";
        } else {
            return "Invalid User";
        }
    }
}

module.exports = seven;