function chunk(ray, size){
let ans = []


let start = 0

while (start < ray.length){
    let end = start + size
    let sub = ray.slice(start,end)
    ans.push(sub)
    start = end
}

return ans
}

console.log(chunk(['a', 'b', 'c', 'd'], 2)); // Expected output: [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // Expected output: [['a', 'b', 'c'], ['d']]

//slice(start, end)
//[a,b,c,d,e], 2 ---> [[a,b], [c,d], [e]] ---> [[0,2], [2,4], [4,6]] 
// ---> [[n,n+2], [n+2,n+4], [n+4,n+6]] ---> +2 comes from the size