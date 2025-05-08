/* Binary Search
function binarySearch(arr,x){
    let mid;
    let high=arr.length-1;
    let low=0;
    
    while(high>=low){
        mid=low+Math.floor((high-low)/2);
        if(arr[mid]==x)
            return mid;
        if(arr[mid]>x)
            high= mid-1;
        else{
            low=mid+1;
        } 
    }
}
arr= new Array(11,12,13,14,15,16,17);
x=15;
n=arr.length;
result=binarySearch(arr,x);
if(result == -1)
    console.log("not found", + result);
else{
    console.log("the present index is ", + result);
}*/
/* Breadth first search 
function bfs(adj) {
    let V = adj.length;  // Number of vertices
    let s = 0;           // Starting node (assuming node 0)
    let res = [];        // Stores the traversal order
    let q = [];          // Queue for BFS
    let visited = new Array(V).fill(false); // Track visited nodes

    // Mark source node as visited and enqueue it
    visited[s] = true;
    q.push(s);

    // Start BFS loop
    while (q.length > 0) {//checks and run as long as there are node
        let curr = q.shift();  // remove the first element from the queue
        res.push(curr);//dequeued mode beging explored

        // Visit all neighbors of the current node
        for (let x of adj[curr]) { // Loop through all neighbors of 'curr'
            if (!visited[x]) {  // Check if the neighbor has not been visited
                visited[x] = true;  // Mark the neighbor as visited
                q.push(x);  // Add the neighbor to the queue for future processing
            }
        }
    }
    return res;  // Return traversal order
}let adj = 
[ [1,2], [0,2,3], [0,4], [1,4], [2,3]];
let src = 0;
let ans = bfs(adj);
for (let i of ans) {
console.log(i + " ");
}*/

let map=([
    [1, 2],
  [2, 4],
  [4, 8],
])
newArray=(map);


