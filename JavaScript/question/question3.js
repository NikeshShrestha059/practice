console.log("question 3")
let array =[1,2, 3, 4, 5, 8, 9, 10] 
// console.log(array)
// let a = array.reverse()

let u = array.length - 1;
let reversedArray=[];
while(u>=0){
   reversedArray.push(array[u]);
    u--;
}
console.log(reversedArray)

console.log("===============================")

console.log("question 4")
let n=2;
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i]=== n) {
        found = true;
        break;
    }

}
console.log("Found", found);
console.log("===============================")

console.log("question 5")
let foundIndex = -1;
for(let i=0; i<array.length;i++){
   if(array[i]===2){
    foundIndex = i;
    break;
   }
}

console.log(foundIndex)
console.log("==============================")


