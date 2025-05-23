const array=[1 , 2 , undefined , 3 , 4 , true , false , {}]
const findNum = array.filter(num => typeof num == "number");
console.log(findNum);


