//DOM
/*let topic =document.getElementById("topic");
console.log(topic);

let para = document.getElementsByTagName("p");
console.dir(para);

let cal = document.getElementsByClassName("blue");
console.dir(cal);
*/
/*
//query selector
//we can use in all the things like id,class,tag 
let element = document.querySelector("p"); //return 1st element 
console.dir(element);
let allel = document.querySelectorAll("p"); //returns all the elements
console.dir(allel);// returns node list 
*/
/* 
//property
let div=document.querySelector("div");
console.dir(div);
//tagName (return the tag /kun tag use vako teyo print garxa)
//innerText(gives only text as an output/ change the text of the tag  )
//innerHtml(provides all the tags including the text/ we can change and add some of the tag if we want to change or addd)
//textcontent(it allow user to see even the hidder text in the code)
*/
//practice question
//qno 1 write hellow JavaScript then append from "your name" 
// let h2 =document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Nikesh";
let divs=document.getElementsByClassName("nike");
let idx=1;
for(div of divs){
    div.innerText = `new unique text ${idx}`;
    idx++;
}
