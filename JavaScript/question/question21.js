const str = "testing"
const bst = "sdfasdf"
const abc = "abcdefg"

String.prototype.toUcFirst = function(){
    return this.charAt(0).toUpperCase() + this.slice(1)
}
console.log(abc.toUcFirst(),abc)
