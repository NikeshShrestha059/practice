const array=[1,2,3,4,5,6,7,8,9,10];
const sumOfArray = array.reduce((acc, num){
   return acc + num, 0
  
});
 console.log(sumOfArray);



// const data = array.map((value) =>{
//    if(value > 2){
//       return value * 2
//    }
//    return value;
// })

// console.log(data)

// const data1 = array.reduce(function(acc, iterator){
//    if(iterator > 2){
//       const val = iterator * 2;
//       acc.push(val);
//    }
//    return acc;
// }, [])

// let sum = 0;
// array.forEach(x => {
//    sum += x;
// })
// console.log(x)

