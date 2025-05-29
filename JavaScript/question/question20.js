const array=[1,2,[3,4],true,[{}],null];
const filterArray=array.reduce(function(acc,item){
    if(item === null)
    return acc;
    
    if(Array.isArray(item)){
        for(let i=0;i<item.length;i++){
             acc.push(item[i]);
        }  
    }else {
        acc.push(item);
    }
    return acc;
},[]);
console.log(filterArray);
// Output: [1, 2, 3, 4, true,{}]
