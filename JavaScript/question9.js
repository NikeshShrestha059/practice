let array =[1,2, 3, 4, 5, 8, 9, 10] 
console.log("question 9")
let sum = 0
for(i=0;i<array.length;i++){
    sum=sum+array[i];
    
}
console.log(sum);
console.log("===========================")

console.log("question 10")
let smallerNumber=[]
let biggerNumber=[]
for(i=0;i<array.length;i++){
    if(array[i]<=5){
        smallerNumber.push(array[i]);

    }else{
            biggerNumber.push(array[i]);

    }
}
console.log(smallerNumber)
console.log(biggerNumber)
console.log("==========================")