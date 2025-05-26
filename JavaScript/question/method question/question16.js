const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const evenArray=array.filter(function(num){
    return num%2==0;
});
console.log(evenArray)