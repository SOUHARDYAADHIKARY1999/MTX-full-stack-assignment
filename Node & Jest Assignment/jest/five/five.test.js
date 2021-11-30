
const five = require('./five');


//passed test cases
test('validateUser',(() => {
    expect(five.validateUser("1","123")).toBe("Valid User");
    expect(five.validateUser("2","456")).toBe("Valid User");
    expect(five.validateUser("3","789")).toBe("Valid User");
    expect(five.validateUser("4","123")).toBe("Invalid User");
}
));


//to check failed test cases
// test('validateUser',(() => {
//     expect(five.validateUser("4","123")).toBe("Valid User");
// }
// ));