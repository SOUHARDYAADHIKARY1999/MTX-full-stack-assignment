const four = require('./four');


//passed Test case
test('returnBookDataById', () => {
    expect(four.returnBookDataById(1)).toEqual({bookId: 1, bookname: 'Three musketeers', author:"Alexandre Dumas", cost:500});
});


test('returnBookDataById', () => {
    expect(four.returnBookDataById(7)).toBe(null);
});

// failed Test case due to wrong output
// test('returnBookDataById', () => {
//     expect(four.returnBookDataById(2)).toEqual({bookId: 1, bookname: 'Three musketeers', author:"Alexandre Dumas", cost:500});
// });