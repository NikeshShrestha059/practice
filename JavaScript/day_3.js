//Loops
//For Loop
/* for (let i=1; i<=5;i++){
    console.log("nikesh")
 }*/

//Calaulate sum of 1 to nth number
/*let sum = 0;
let n=7
for(let i=1;i<=n;i++){
    sum=sum+i;
    console.log(sum);
}*/

//While Loop 

/*let i=5;
while(i>=1){
    console.log("i=", i);
    i++;
}*/

//Do While Loop 
/* 
let i=20;
do {
    console.log("nikesh"); even if the condition is false the loop is runned atlist once
    i++;
}while (i<=10);*/

//for-of loop 
/* 
let str="Nikeshshrestha";
let len = 0;
for (let i of str){ //iterator->charecters
    console.log("i=",i);
    len++;
}
console.log(len);// calculating the size of the string  
*/

//for in loop 
/*
let student={
    Fullname:"nikesh",
    roll:5,
    age:22,
    class:"bachlor",
    GPS:4,
    pass:true,
};
for(let i in student){
    console.log("key=",i,"value=",student[i]); //key lai print garxa
}
    */


//pratice qn:1 print even number from 1 to 100;
/*
for(let i=1;i<=100;i++){
    if(i%2===0){
        console.log("even number=",i);
    }
   
}*/

//pratice qn2
let gamenum=25;
let num=prompt("guess the number");
while(num != gamenum){
    num =prompt("you have enter wrong number.Try again");

}console.log("correct number");
// if(num==gamenum){
//     console.log(num,"is correct number");
// }else{
//     console.log(num,"is not correct number");
// }
    

