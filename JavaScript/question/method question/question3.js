const arr=[3,2,5,1,2,8,10];
const revArray=arr.reduce(function(acc,num){
    acc.unshift(num);
    return acc
},[]);
console.log(revArray);

