const registeration = require('./six');



test('Valid Registration', ()=>{
    uid="uid001";
    pwd="Gyanp";
    role="admin";
    var result = registeration(uid,pwd,role);

    expect(registeration(uid,pwd,role)).toEqual("Registration successful");

});