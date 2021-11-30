const seven = require('./seven');



test('Valid Registration', ()=>{

    expect(seven.register("uid001","Souh")).toEqual("Registration successful");

});

test('Valid User Login', ()=>{
    expect(seven.login("uid001","Souh")).toEqual("Valid User logged in");

});
