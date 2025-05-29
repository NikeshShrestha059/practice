const array=[1 , 2 , undefined , 3 , 4 , true , false , {}];
const filteredArray = array.filter(function(num){
    return typeof num === "number";
});
console.log(filteredArray);