
var registeredUser = [];

function registeration(uid, pwd, role){
    if(uid=!"" && pwd!="" && role!=""){
        let user = {
            "user id":uid,
            "password":pwd,
            "role":role
        }
        registeredUser.push(user);
        console.log(registeredUser);
        return ("Registration successful");
    }
    else{
        return ("Registration failed");
    }
}


module.exports = registeration;