const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const finalArray =[];
const oddNumber =array.filter(function(num){
    return num%2!=0;
}).map(function(num){
    finalArray.push(num*3);
    return num*3;
})
console.log(oddNumber);
console.log(finalArray);