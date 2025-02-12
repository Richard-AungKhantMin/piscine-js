function reverse(a){
    let b = []

    for (let i = a.length-1; i >= 0; i--){
        b.push(a[i])
    }

    return b
}

console.log(reverse([1,2,3,4,5]))