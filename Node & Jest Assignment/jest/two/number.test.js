var {great_two,great_three,fact,odd_even,largest_in_array,num_present} =require('./number');

test('2 is greater than 1', () => {
    expect(great_two(1, 2)).toBe(2)
})
test('3 is greater than 1 and 2', () => {
    expect(great_three(1, 2,3)).toBe(3)
})
test('factorial of 4 is 24', () => {
    expect(fact(4)).toBe(24)
})
test('largest in [1,2,3] is 3', () => {
    expect(largest_in_array([1,2,3])).toBe(3)
})

test('2 is a even number',()=>{
    expect(odd_even(2)).toBe(true);
})
// add on
test('even and odd numbers', () => {
    expect(odd_even(2)).toBeTruthy();
    expect(odd_even(101)).toBeFalsy();
});
test('1 is present in the array [1,2,3]', () => {
    expect(num_present(1,[1,2,3])).toBe(true)
})