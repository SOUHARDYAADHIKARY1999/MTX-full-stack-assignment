function display(unionData:(number|string))
{
    var str:string
    if(typeof(unionData)=='number'){
        str=unionData.toString();
    }
    else
        str=unionData
    const len = str.length;

    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return "Not palingdrome"
        }
    }
    return "Paligdrome";
}

console.log(display(123));
console.log(display(121));
console.log(display('dad'));
console.log(display('son'));