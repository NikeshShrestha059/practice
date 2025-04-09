//string 
/*let str="NikeshShrestha"; //create string
console.log(str.length); //prints length of the string 
console.log(str[2]);// prints the 2nd charecter of the string 
*/
//Tempelate Literals in js 
/* 
let obj={
    item:"pen",
    price:"10",
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output); // using tempelate literals
console.log("the cost of", obj.item,"is",obj.price,"rupees");
*/
//String Method
//str.to UpperCase
/*let str="    Nikesh Shrestha";
up_str=str.toUpperCase(); // string ma vako sabai charecter lai uppercare ma lagxa
low_str=str.toLowerCase();
trim_str=str.trim();//2 tai end ko space lai trim garxan 
console.log(str);
console.log(up_str); 
console.log(low_str);
console.log(trim_str);
 some of the other methods are 
# str.slice(start,end);
 user lay deya ko start ra end ko anusar charecter peint garxa
# str1.concat(str2);
 str1 ra str2 lai join gardinxa
#str.replace(searchVal,newVal); (replace the first value) replaceAll (replace all the value )
 value lai search garxa ane new val xsanga replace garxa 
#str.charAt(inx);
 helps to find charecter on nth index
helps to search the value
*/
//Practice qno
//qno1 take user name and generate a username where the username starts with @ and ends with length of the name
let user_name=prompt("enter ur name");
let user="@"+user_name+user_name.length;
console.log(user);
