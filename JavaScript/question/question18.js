const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const oddNumber=[];
const finalArray=[];
for(let i =0; i < array.length ;i++){
    if(i%2==0){
       oddNumber.push(array[i]); 
       finalArray.push(array[i]*3);
    }
   
}
 console.log("odd number",oddNumber);
  console.log("multiply by 3",finalArray);