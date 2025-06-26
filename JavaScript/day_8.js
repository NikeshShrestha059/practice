//Attribute in Dom 

/*getAttribute
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);

setAttribute
div.setAttribute("id","nike");//change the name of the id from box to nike
*/

//.style
/*let div = document.querySelector("div");
div.style.backgroundColor="red";
div.style.fontSize="29px";
div.innerText="Hello";
*/

//insert Element
let newBtn = document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

let div =document.querySelector("div");
div.append(newBtn);// add elements at the end 
// div.prepend(newBtn);//add elements at the start 
// div.before(newBtn);//add the element befor the div starts
// div.after(newBtn);//add the element after the div ends

/*let newHeading = document.createElement("h1");
newHeading.innerText="Helloooooooo";
document.querySelector("body").prepend(newHeading); //added a new heading inside the body at the top 
 let para=document.querySelector("p");
 para.remove();*/

 /*practice question
 qno 1*/
let newBut= document.createElement("button");
newBut.innerText= "Click me";
newBut.style.backgroundColor="red";
newBut.style.color="white";
console.log(newBut);

document.querySelector("body").prepend(newBut);

//qno 2
let para=document.querySelector("p");
let list = getElementById("")