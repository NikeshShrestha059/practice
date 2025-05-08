//String
/*
let mark=[67,78,89,90,54,43];
console.log(mark);
for(let idx=0;idx < mark.length;idx++){
    console.log(mark[idx]);
}
*/
/*
let std = ["nikesh","ram","sita","hari","gita","rita","shyam",];
for(let name of std){
console.log(name.toUpperCase()); 
}
*/
//practice qno find the average of the number

/*let marks= [85,97,44,37,76,60];
let sum=0;
for(let val of marks){
   sum+=val;
    console.log(sum);
}
console.log(sum/marks.length);*/

//qno 2 print the offer price of the product after 10% discount
/*let price=[250,645,300,900,50];
for(let per of price){
    console.log(`The price before offer is ${per}`);
    let off=per*0.1; 
    console.log(`the price after offer is ${per-off}`);
}
*/
                  //Array method 
/*
let fru_item= ["apple","Banana","Orange","pineapple"];
fru_item.push("mango");//push adds the item at the last 
console.log(fru_item);
fru_item.pop();// pop delets the items from the last 
console.log(fru_item);
console.log(fru_item.toString());
*/
/*let marvel_heros=["thor","spiderman","ironman"];
let DC_heros=["superman","batman"];
let nepali_heros=["Rajesh dai"]
let heros = marvel_heros.concat(nepali_heros);//concat helps to join the array
console.log(heros);
marvel_heros.unshift("antman");//adds the items in the start of the array
console.log(marvel_heros)
marvel_heros.shift();//delets the item which is in the start of the array
console.log(marvel_heros);
console.log(marvel_heros.slice(2))//index 2 sama ko item print garxa
let arr=[1,2,3,4,5,6,7,8,9];
arr.splice(1,2,12,13); //replace
arr.splice(1,0,222);//adding 
arr.splice(3,1);// deleteing
console.log(arr);
*/

// practice qno
// create an array "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
/*let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(arr);
Remove the first company from the array 
arr.shift();
Remove Uber&Add Ola
arr.splice(2,1,"Ola");
Add Amazon at the end 
arr.push("Amazon");
console.log(arr);
*/