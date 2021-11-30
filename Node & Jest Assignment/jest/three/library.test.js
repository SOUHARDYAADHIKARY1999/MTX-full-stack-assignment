var library = require('./library');


//passed test case
test('returnBookDataById', () => {
    expect(library.returnBookDataById(1)).not.toBeNull();
});

//failed test case
// test('returnBooKDataById',()=>{
//     expect(three.returnBookDataById(1)).toBeNull();
// });