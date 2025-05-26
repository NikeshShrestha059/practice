const arr=[3,2,5,1,2,8,10];
arr.forEach(function(index,num){
    if(arr[num]<4){
        console.log("less then 4");
    }else{
        console.log(arr[num]);
    }
});