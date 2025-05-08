//Function
/* 
function myFunction(){ //creating the function
console.log("nikesh"); //when you call the function "nikesh" will print
}
myFunction();// calling the function 
*/
/*
User input function 
function myFunction(msg){ //parameter -> input 
    console.log(msg);// takes the input from th user 
}
myFunction("I love uu");//argument prints what is inside the bracket;
*/
//function ->2 number,sum
/*function sum(a,b){

    console.log(a+b); 
}*/
//Arrow Function (changing the above function into the arrow function)
/*const functionSum=(a, b)=>{ sum using arro function 
   return a + b;
}
const arrmul=(a,b)=>{ multiply using arrow function 
    return a * b;
}*/

/* pratice questin 
//qno:1 create a function and calculat the vowel in the string 
function vowel(str){
    let count=0; //at first the count starts from the 0 and increases when it finds vowel(let can be change )
    for( const char of str){ //str lai char ma convert garxa as a string 
        if(
            char==="a"|| //cheecks if the char one by one and see if it is ("aeiou") 
            char==="e"||
            char==="i"||
            char==="o"||
            char=="u"
           
        ) count++;{ //count in crease when ever it finds the vowel
           
        }
    }
      console.log(count);//prints the number of vowels
}
// create an arrow function and calculat the vowel in the string 
const vowel=(str)=>{
    count=0;
    for(const char of str){
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"
        )count++;{

        }
    }return count;
}
*/
/*          Method 

//for each method
let num=[1,2,3,4,5,6];
num.forEach((num)=>{
    console.log(num*num);
})

//map method 
let newArr=num.map((val)=>{
    return val* val;
}
)
console.log(newArr);

//filter method 
let arr=[1,2,3,4,5];
let evenArr = arr.filter((val)=>{
    return val% 2==0;

});
// let oddArr = arr.filter((val)=>{
//     return val% 2!==0;
    
// });
// console.log(oddArr.Arr);
console.log(evenArr);


//reduce medtho
let arr=[5,4,6,3,7,2,8,1,9,0];
const output = arr.reduce((prev,curr)=>{
    return prev> curr ?prev:curr;
});
console.log(output);
*/
//practice qurstion 
/*qno 1 filter the marks of the student that is equal to or above 90
let marks=[98,87,76,65,54,43,32,21,91,90];
let topMarks=marks.filter((val)=>{
    return val>=90; 
});console.log(topMarks);

qno 2 
.create an array with 1 to nth number given by the user
.use reduce to calculate sum of all the number in the array
.use reduce to calculate product of all the number in the array 

let n= prompt("enter a number of array"); //tekes user input
console.log(n);//prints the number given by the user
let arr=[];// creates an empty array 
for (let i=1; i<=n; i++){  //loop is runned till the nth number given by the user
    arr[i-1]=i; //array is placed in a locetion (0)1,(1)2,(2)3 .... so on 
}console.log(arr);
//sum of array
let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
});console.log("sum=",sum);
//product of array  
let mul=arr.reduce((pre,curr)=>{
    return pre*curr;
});console.log("factorial=",mul);
*/
