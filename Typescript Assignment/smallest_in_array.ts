var arr=new Array(56,78,89,90,12);

var min1:number=999999999
for(var i1 in arr){
    if(min1>arr[i1])
        min1=arr[i1];
}
console.log("Minimum number in array "+min1);
console.log("First element "+arr[0])