const arr=[3,2,5,1,2,8,10];
const lessNumber=[];
const moreThanNumber=[];
arr.forEach(function(index,num){
    if(arr[num]<5){
         lessNumber.push(arr[num]);
    }else{
                moreThanNumber.push(arr[num]);
    }
});
console.log(lessNumber,"less then 5");
console.log(moreThanNumber,"more then 5");

