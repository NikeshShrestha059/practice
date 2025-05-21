let array=[3,2,5,1,2,8,10];
for(let i=0; i<=array.length;i++){
  
    console.log("using for loop ",i,':',array[i])
}

let u = 0;
while(u <= array.length){
    console.log("using while loop",u,":",array[u]);
    u++;
}
// for(let j in array){
//     console.log("using for in loop " ,j,":",array[j])
// }

for(let key of array){
    console.log("using for of loop ",array.index)
}


