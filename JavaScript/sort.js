/*function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {  //created a loop and i is declared as 0 and the loop will run until the value of i is less then nth-1  
        let minIndex = i; //stores the value of i 
        for (let j = i + 1; j < n; j++) {// created a loop where j is eqal to i+1 and the loop will run until the j is less then n 
            if (arr[j] < arr[minIndex]) {//condition statement is used where if the arr[j] is less then arr[minIndex] then
                minIndex = j;// the value is changed 
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr; //returns the value
}
let number=[98,67,65,45,65,68,9,90,1,54,78];
console.log(number);
console.log(selectionSort(number));;*/

/*Merge Sort
function mergeSort(arr) {//created a function name mergeSort
    if (arr.length <= 1) {//consition if the arr.length is less then 1 then
        return arr;//return the arr
    }
    let mid = Math.floor(arr.length / 2);//helpd to find th mid
    let left = mergeSort(arr.slice(0, mid));//arr is sliced and then from index 0 to min is stored in left  
    let right = mergeSort(arr.slice(mid));//and the remaining index after mid is stored in right 
    return merge(left, right);// then mearging the two half 
}

function merge(left, right){//create a function name merge
    let result = [];//create an empty array to hold the sorted element  
    let i = 0, j = 0;//using the pointers to traverse both side

    while (i < left.length && j < right.length) { comparing the both arr
        if (left[i] < right[j]) { if the left is smaller
            result.push(left[i]); push into the result
            i++; and i increase by one 
        } else {
            result.push(right[j]);push j in to thw result
            j++;and j ia increased by one
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
    //helps to append the remaining element 
}

// Example usage
let numbers = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(numbers)); */


function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
console.log(quickSort([8, 2, 5, 3, 9, 4])); // Output: [2, 3, 4, 5, 8, 9]