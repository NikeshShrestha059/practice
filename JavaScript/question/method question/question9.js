const array=[3,2,5,1,2,8,10];
const initialValue= 0;
const sumOfArray = array.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;   
}, initialValue);
 console.log(sumOfArray);