function great_two(a,b){
    return a>b?a:b;
}
function great_three(a,b,c){
    if(a>b)
        return a>c?a:c;
    else
        return b>c?b:c;
}
function fact(a){
    if(a==1 || a==0)
        return 1
    else
        return a*fact(a-1)
}
function odd_even(a){
    return a%2==0?true:false;
}
function largest_in_array(arr){
    return Math.max.apply(null,arr);
}
function num_present(a,arr){
    if(arr.indexOf(a)!=-1)
        return true
    else
        return false
}
console.log(great_two(6,6));
console.log(great_three(5,5,3));
console.log(fact(6));
console.log(odd_even(0));
const arr=[7,96,8];
console.log(largest_in_array(arr));
console.log(num_present(67,arr));

module.exports ={great_two,great_three,fact,odd_even,largest_in_array,num_present}